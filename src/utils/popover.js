/*
  * @Module: popover和tooltip公用方法
 * @Author: 小缘
 * @Date: 2017-09-08 17:56:07
 */
import Vue from 'vue';

// 创建窗口
export function created (data, component) {
  const Instance = Vue.extend(component);
  let tip = new Instance({
    el: document.createElement('div'),
    data
  });
  document.body.appendChild(tip.$el);
  return tip;
}

// 位置计算 - 方向, 触发弹窗的dom, 弹窗dom
export function computationsPosition (direction, el, boxEl) {
  let left = 0, top = 0;
  const position = el.getBoundingClientRect();
  const tipPosition = boxEl.getBoundingClientRect();
  // 方向判断
  switch (direction) {
    case 'top':
      left = position.left + (position.width / 2) - (tipPosition.width / 2);
      top = position.top - tipPosition.height;
      break;
    case 'bottom':
      left = position.left + (position.width / 2) - (tipPosition.width / 2);
      top = position.top + position.height;
      break;
    case 'left':
      left = position.left - tipPosition.width;
      top = position.top + (position.height / 2) - (tipPosition.height / 2);
      break;
    case 'right':
      left = position.left + position.width;
      top = position.top + (position.height / 2) - (tipPosition.height / 2);
      break;
  }
  // 滚动值
  left = left + document.body.scrollLeft;
  top = top + document.body.scrollTop;
  return { left, top };
}
