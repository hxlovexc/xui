/**
 * @module [message全局提示]
 * @author [贺喜]
 * @create date 2017-10-17 06:25:25
 * @params [description]
*/
import Vue from 'vue';
import messageTpl from './x-message.vue';

let instance = '';

// 默认配置
const defaultConfig = {
  top: '18px',
  timer: 3000
};
// 类型
const types = ['loading', 'primary', 'success', 'warning', 'danger', 'dark'];
// 类型
let type = '';

// 初始化
function initInstance () {
  let InstanceClass = Vue.extend(messageTpl);
  instance = new InstanceClass({
    el: document.createElement('div')
  });
  // 添加dom
  document.body.appendChild(instance.$el);
}

// 添加
function showNotice (options) {
  Vue.nextTick(() => {
    instance.add(options);
  });
}

// 创建
function createMessage (message, options, close) {
  const name = `x-message-${Date.now()}`;
  // 第一个参数必须为字符串
  const messageType = typeof message;
  if (messageType === 'string' || messageType === 'number') {
    // 判断options是否存在
    if (typeof options === 'function') {
      close = options;
      options = {};
    }
    // 禁止重复创建
    if (instance === '') {
      initInstance();
    }
    showNotice(Object.assign({}, defaultConfig, options, {
      type,
      close,
      message,
      name
    }));
    // 清空
    type = null;
    // 关闭
    return () => {
      instance.close(name);
    };
  } else {
    console.error('xui -> (x-message组件) : 第一个参数必须为字符串或者数字');
  }
}

types.forEach((item) => {
  message[item] = function () {
    type = item;
    return createMessage.apply(this, arguments);
  };
});

// 关闭全部
message.closeAll = () => {
  instance && instance.close();
};

export default function message () {
  return createMessage.apply(this, arguments);
}
