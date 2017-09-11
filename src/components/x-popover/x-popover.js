/*
  * @Module: popover
 * @Author: 小缘
 * @Date: 2017-08-30 22:10:57
 */
import popoverTpl from './x-popover-content';
import { created, computationsPosition } from 'utils/popover';
import { on, off, once, clickOutside } from 'utils/dom';
// import { debounce } from 'utils';

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'click'
    },
    direction: {
      type: String,
      default: 'top'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      popover: '',
      // 延时器
      timeout: '',
      focusEl: ''
    };
  },
  methods: {
    createpopover () {
      let data = {
        show: this.value,
        direction: this.direction,
        title: this.$slots.title || this.title,
        content: this.$slots.content
      };
      let popover = this.popover = created(data, popoverTpl);
      // 绑定事件
      this.trigger === 'hover' && this.popoverContentBindEvent();
      return popover;
    },
    // 绑定事件
    bindEvent () {
      const $el = this.$el;
      // 判断内容是否存在
      if (process.env.NODE_ENV !== 'production') {
        if (!this.$slots.content) {
          console.error('xui -> (x-popover组件) : slot中的content不能为空');
          return;
        }
      }
      // 事件判断
      switch (this.trigger) {
        case 'click':
          on($el, 'click', this.clickOpen, true);
          break;
        case 'hover':
          on($el, 'mouseenter', this.mouseenterOpen);
          on($el, 'mouseleave', this.mouseleave);
          break;
        case 'focus':
          // 判断是否是input或者textarea
          const el = $el.childNodes[0];
          if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
            this.focusEl = el;
          } else if (el.childNodes.length) {
            const childNodes = el.childNodes || this.focusEl;
            for (let i = 0; i < childNodes.length; i++) {
              const node = childNodes[i];
              const name = node.nodeName;
              if (name === 'INPUT' || name === 'TEXTAREA') {
                this.focusEl = node;
                break;
              }
            }
          }
          if (this.focusEl) {
            on(this.focusEl, 'focus', this.show);
            on(this.focusEl, 'blur', this.hide);
          } else {
            // 执行down
            on($el, 'mousedown', this.mousedownShow);
          }
          break;
      }
    },
    // content绑定
    popoverContentBindEvent () {
      const popoverEl = this.popover.$el;
      on(popoverEl, 'mouseenter', this.mouseenterOpen);
      on(popoverEl, 'mouseleave', this.mouseleave);
    },
    // 点击打开
    clickOpen (event) {
      this.show();
      clickOutside(this.popover.$el, this.hide, true);
    },
    // 按下显示
    mousedownShow () {
      this.show();
      once(document, 'mouseup', this.hide);
    },
    mouseenterOpen () {
      this.timeout = clearTimeout(this.timeout);
      this.show();
    },
    // 移出
    mouseleave () {
      this.timeout = setTimeout(() => {
        this.hide();
      }, 50);
    },
    hide () {
      let popover = this.popover;
      // 防止click下显示后没有remove document的click事件
      popover.$el.clickOutside && this.trigger === 'click' && off(document, 'click', popover.$el.clickOutside, true);
      popover.show = false;
      this.$emit('input', false);
      this.$emit('change', false);
      // 绑定resize
      off(window, 'resize', this.calculationPosition);
    },
    show () {
      let popover = this.popover || this.createpopover();
      // 显示
      popover.show = true;
      this.$emit('input', true);
      this.calculationPosition();
      // 绑定resize
      on(window, 'resize', this.calculationPosition);
    },
    // 位置计算
    calculationPosition () {
      this.$nextTick(() => {
        let popover = this.popover;
        let { left, top } = computationsPosition(this.direction, this.$el, popover.$el);
        popover.left = left;
        popover.top = top;
        this.$emit('change', true);
      });
    }
  },
  // computed: {
  //   resize () {
  //     return debounce(this.calculationPosition, 300);
  //   }
  // },
  render (h) {
    return (<div class="x-popover-box">{this.$slots.default}</div>);
  },
  beforeDestroy () {
    const $el = this.$el;
    // 事件判断
    switch (this.trigger) {
      case 'click':
        off($el, 'click', this.clickOpen, true);
        break;
      case 'hover':
        if (this.popover === '') return;
        const $popoverEl = this.popover.$el;
        off($el, 'mouseenter', this.mouseenterOpen);
        off($el, 'mouseleave', this.mouseleave);
        off($popoverEl, 'mouseenter', this.mouseenterOpen);
        off($popoverEl, 'mouseleave', this.mouseleave);
        break;
      case 'focus':
        if (this.focusEl) {
          off(this.focusEl, 'focus', this.show);
          off(this.focusEl, 'blur', this.hide);
        } else {
          off($el, 'mousedown', this.mousedownShow);
        }
        break;
    }
    // 解绑
    off(window, 'resize', this.calculationPosition);
  },
  watch: {
    value (value) {
      if (value === this.popover.show) return;
      const trigger = this.trigger;
      if (value) {
        trigger === 'click' ? this.clickOpen() : this.show();
      } else {
        this.hide();
      }
    }
  },
  mounted () {
    this.bindEvent();
    // 避免一开始显示的时候位置不对
    setTimeout(() => {
      this.$nextTick(() => {
        // 避免重复执行show - 比如延时五秒显示弹窗, 中间又手动触发了显示
        this.popover.show === false && this.value && this.show();
      });
    }, 10);
  }
};
