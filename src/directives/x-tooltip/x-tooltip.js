import tooltipTpl from './x-tooltip-content';
import { created, computationsPosition } from 'utils/popover';
import { on, off } from 'utils/dom';
import Vue from 'vue';

// 类型
const types = ['primary', 'success', 'warning', 'danger', 'dark'];
// 方向
const direction = ['top', 'right', 'bottom', 'left'];

function createdTip () {
  let tooltip = '';
  // 判断是否已经创建过
  if (!this.tooltip) {
    this.tooltip = created({
      content: this.tipContent,
      direction: this.tipDirection,
      type: this.tipType
    }, tooltipTpl);
    let el = this.tooltip.$el;
    // 弹窗绑定事件
    on(el, 'mouseenter', showTip.bind(this));
    on(el, 'mouseleave', hideTip.bind(this));
  }
  tooltip = this.tooltip;
  // 显示
  showTip.call(this);
  Vue.nextTick(() => {
    let {left, top} = computationsPosition(this.tipDirection, this, this.tooltip.$el);
    tooltip.left = left;
    tooltip.top = top;
  });
}

function showTip () {
  clearTimeout(this.timeout);
  this.timeout = '';
  this.tooltip.show = true;
}

function hideTip () {
  if (this.tooltip.show) {
    this.timeout = setTimeout(() => {
      this.tooltip.show = false;
    }, 50);
  }
}

export default {
  bind (el, bind) {
    let data = Object.keys(bind.modifiers);
    // 内容
    el.tipContent = bind.value;
    if (direction.indexOf(data[0]) > -1) {
      el.tipDirection = data[0];
      el.tipType = types.indexOf(data[1]) > -1 ? data[1] : '';
    } else {
      if (types.indexOf(data[0]) > -1) {
        el.tipType = data[0];
        el.tipDirection = direction[0];
      } else {
        el.tipDirection = direction[0];
        // 类型
        el.tipType = types.indexOf(data[1]) > -1 ? data[1] : '';
      }
    }
    on(el, 'mouseenter', createdTip.bind(el));
    on(el, 'mouseleave', hideTip.bind(el));
  },
  update (el, bind) {
    el.tooltip.content = bind.value;
  },
  unbind (el) {
    const tooltip = el.tooltip;
    if (tooltip) {
      const tooltipEl = tooltip.$el;
      off(el, 'mouseenter', createdTip);
      off(el, 'mouseleave', hideTip);
      off(tooltipEl, 'mouseenter', showTip);
      off(tooltipEl, 'mouseleave', hideTip);
      tooltip.$destroy();
      document.body.removeChild(tooltipEl);
    }
  }
};
