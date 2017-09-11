/*
  * @Module: 操作dom
 * @Author: 小缘
 * @Date: 2017-09-01 11:40:40
 */

// 绑定事件
export function on (el, event, callback, useCapture = false) {
  el.addEventListener(event, callback, useCapture);
}

// 移除事件
export function off (el, event, callback, useCapture = false) {
  el.removeEventListener(event, callback, useCapture);
}

// 绑定事件 - 只执行一次
export function once (el, event, callback) {
  function trigger () {
    callback && callback.apply(this, arguments);
    off(el, event, trigger);
  }
  on(el, event, trigger);
}

// 点击指定元素以外执行回调
export function clickOutside (el, callback, useCapture) {
  if (typeof el === 'function') {
    callback = el;
    el = '';
  }
  el.clickOutside = function (event) {
    let state = false;
    // 多个
    el = [].concat(el);
    if (el.length) {
      for (let i = 0; i < el.length; i++) {
        if (el[i].contains(event.target) === false) {
          state = true;
          break;
        }
      }
    } else {
      state = true;
    }
    if (state && callback) {
      callback();
      el.clickOutside = null;
    }
  };
  on(document, 'click', el.clickOutside, useCapture);
}
