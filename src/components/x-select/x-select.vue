<template>
  <div
    class="x-select"
    :class="[
      `x-select-${type}`,
      {
        'x-select-open': show
      }
    ]"
  >
    <div
      class="x-select-head"
      @click="toggleShow"
    >
      <input
        type="text"
        class="x-select-input"
        :title="query"
        :class="{
          'x-disabled':  disabled,
          'x-radius': radius
        }"
        v-model="query"
        :placeholder="placeholder"
      >
      <i class="x-icon-arrow-dropdown"></i>
    </div>
    <!--option-->
    <transition name="fade" v-if="disabled === false">
      <div class="x-dropdown-menu" v-show="show">
        <ul ref="options-box">
          <slot></slot>
        </ul>
        <!--加载信息-->
        <!--<p v-show="loadingText" class="x-select-load-msg">{{loadingText}}</p>-->
      </div>
    </transition>
  </div>
</template>

<script>
  import { on, off } from 'utils/dom';

  export default {
    name: 'x-select',
    props: {
      value: {
        type: [String, Number, Array],
        required: true,
        default: ''
      },
      type: {
        type: String,
        default: 'default'
      },
      radius: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      multiple: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      filter: {
        type: Boolean,
        default: false
      },
      remote: {
        type: Boolean,
        default: false
      },
      remoteMethod: {
        type: Function
      }
    },
    data () {
      return {
        show: false,
        query: '',
        curLabel: '',
        curIndex: '',
        selected: {},
        hoverIndex: -1,
        options: [],
        filterOptionsLength: false,
        adHoc: []
      };
    },
    methods: {
      toggleShow () {
        // 禁用状态不执行
        if (this.disabled) return;
        if (this.show) {
          this.hideOptions();
        } else {
          this.showOptions();
        }
      },
      // 显示options
      showOptions () {
        this.show = true;
        on(document, 'click', this.isElClick);
        on(document, 'keydown', this.keydown);
        this.$emit('show-change', this.show, this.$el);
        // 重置hoverIndex
        this.hoverIndex = this.curLabel && this.curIndex !== '' ? this.curIndex : -1;
      },
      // 隐藏options
      hideOptions () {
        this.show = false;
        off(document, 'click', this.isElClick);
        off(document, 'keydown', this.keydown);
        this.$emit('show-change', this.show, this.$el);
      },
      // 空白处点击
      isElClick ({ target }) {
        if (this.$el.contains(target) === false) {
          // 如果没有选中移除hover
          !this.query && (this.hoverIndex = -1);
          this.hideOptions();
        }
      },
      // option点击
      optionsChange (index, isChange) {
        const data = this.options[index];
        this.hoverIndex = index;
        if (this.multiple) {
          let value = this.value.slice();
          const valueIndex = value.indexOf(data.value);
          // 判断是否已经选中
          if (valueIndex === -1) {
            value.push(data.value);
          } else {
            value.splice(valueIndex, 1);
          }
          // 合并到临时数组 - 用于 x-options的selected
          this.adHoc = this.adHoc.concat(value);
          if (isChange) {
            this.$emit('input', this.adHoc);
            this.$emit('change', this.adHoc);
          }
        } else {
          const value = data.value;
          if (isChange) {
            this.hideOptions();
            // 避免不必要的emit
            if (this.value === value) return;
            this.$emit('input', value);
            this.$emit('change', value);
          }
        }
        this.curIndex = index;
      },
      // 修改hoverIndex
      modifyHoverIndex (type) {
        // 判断是否全部
        const siAllDisabled = this.options.length === this.options.filter(item => item.disabled === true).length;
        if (siAllDisabled) return;
        const length = this.options.length - 1;
        if (type === 'next') {
          this.hoverIndex++;
          this.hoverIndex = this.hoverIndex > length ? 0 : this.hoverIndex;
        } else {
          this.hoverIndex--;
          this.hoverIndex = this.hoverIndex < 0 ? length : this.hoverIndex;
        }
        // 判断当前是否是禁用
        (this.options[this.hoverIndex].disabled || !this.options[this.hoverIndex].show) && this.modifyHoverIndex(type);
        this.optionsScroll();
      },
      // option容器滚动
      optionsScroll () {
        const box = this.$refs['options-box'];
        const optionClient = this.options[this.hoverIndex].$el.getBoundingClientRect();
        const optionsBoxClient = box.getBoundingClientRect();
        const top = optionClient.top - optionsBoxClient.top;
        const bottom = optionClient.bottom - optionsBoxClient.bottom;
        if (top < 0) {
          box.scrollTop += top;
        } else if (bottom > 0) {
          box.scrollTop += bottom;
        }
      },
      keydown (event) {
        switch (event.keyCode) {
          // 上
          case 38:
            event.preventDefault();
            this.modifyHoverIndex();
            break;
          // 下
          case 40:
            event.preventDefault();
            this.modifyHoverIndex('next');
            break;
          // 回车
          case 13:
            if (this.hoverIndex === -1) return;
            event.preventDefault();
            this.optionsChange(this.hoverIndex, true);
            break;
          // 退出
          case 27:
            event.preventDefault();
            this.hideOptions();
            break;
        }
      },
      getLabel (value) {
        let label;
        for (let index = 0; index < this.options.length; index++) {
          const item = this.options[index];
          /* eslint-disable eqeqeq */
          if (item.value == value) {
            label = item.label;
            // 单选模式跳出循环-避免无用的遍历
            if (!this.multiple) {
              break;
            }
          }
        }
        return label;
      },
      selectLabel () {
        let label;
        if (this.multiple) {
          label = [];
          this.value.forEach((value) => {
            label.push(this.getLabel(value));
          });
          label = label.join(', ');
        } else {
          label = this.getLabel(this.value);
        }
        this.query = this.curLabel = label;
      }
    },
    watch: {
      value (value) {
        // 清楚临时存放数组
        this.adHoc = [];
        this.selectLabel();
      }
    },
    mounted () {
      this.value && this.selectLabel();
    }
  };
</script>
