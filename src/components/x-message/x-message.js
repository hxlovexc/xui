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
  timer: 2000
};
// 类型
const types = ['success', 'warning', 'danger', 'dark'];
let type = 'default';

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
  if (typeof message !== 'string') {
    return console.error('第一个参数必须为字符串');
  }
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
    close
  }));
  // 关闭
  return () => {
    instance.close();
  };
}

types.forEach((item) => {
  message[item] = function () {
    type = item;
    return createMessage.apply(this, arguments);
  };
});

export default function message () {
  return createMessage.apply(this, arguments);
}

