/*
  * @Module: 弹窗
 * @Author: 小缘
 * @Date: 2017-07-23 21:17:51
 */
import Vue from 'vue';
import dialogTpl from './x-dialog.vue';

// 调用列表
// let dialogList = [];
let instance = '';
// 默认配置
const defaultConfig = {
  title: '提示',
  dialogType: 'alert',
  type: '',
  message: '',
  radius: true,
  inputValue: '',
  inputPlaceholder: '请输入内容',
  showCloseButton: false,
  showConfirmButton: true,
  closeButtonText: '取消',
  confirmButtonText: '确定',
  close: '',
  confirm: '',
  maskClose: true,
  promptRequired: true,
  mask: true,
  icon: '',
  escClose: true
};
// icon
const icons = {
  success: 'x-icon-checkmark-circle',
  error: 'x-icon-alert',
  warning: 'x-icon-cancel',
  info: 'x-icon-information-circled'
};

// 初始化
function initInstance () {
  let InstanceClass = Vue.extend(dialogTpl);
  instance = new InstanceClass({
    el: document.createElement('div')
  });
  // 添加dom
  document.body.appendChild(instance.$el);
}

// 显示弹窗
function showDialog (options) {
  for (let item in options) {
    instance[item] = options[item];
  }
  Vue.nextTick(() => {
    instance.show = true;
  });
}

// 创建弹窗
function createDialog (options, confirm, close) {
  let config = {};
  // 类型
  options.icon = options.icon || icons[options.type] || '';
  if (process.env.NODE_ENV !== 'production') {
    if (options.dialogType !== 'prompt' && !options.message) {
      console.error('xui -> (x-dialog组件) : message不能为空');
      return;
    }
  }
  // 禁止重复创建
  if (instance === '') {
    initInstance();
  }
  if (process.env.NODE_ENV !== 'production') {
    if (typeof window.Promise !== 'function') {
      console.info('xui -> (x-dialog组件) : 当前浏览器不支持Promise如果想使用Promise可以引入es6-promise');
    }
  }
  if (typeof window.Promise === 'function' && !confirm) {
    return new Promise((resolve, reject) => {
      Object.assign(config, defaultConfig, options, {
        confirm: resolve,
        close: reject
      });
      showDialog(config);
    });
  } else {
    Object.assign(config, defaultConfig, options, {
      confirm: confirm,
      close: close
    });
    showDialog(config);
  }
}

// 弹窗类
class Dialog {
  alert (message, options, confirm, close) {
    if (typeof options === 'function') {
      close = confirm;
      confirm = options;
      options = {};
    }
    return createDialog(
      Object.assign({
        dialogType: 'alert',
        message: message
      }, options),
      confirm,
      close
    );
  }
  confirm (message, options, confirm, close) {
    if (typeof options === 'function') {
      close = confirm;
      confirm = options;
      options = {};
    }
    return createDialog(
      Object.assign({
        dialogType: 'confirm',
        message: message,
        showCloseButton: true
      }, options),
      confirm,
      close
    );
  }
  prompt (options, confirm, close) {
    if (typeof options === 'function') {
      close = confirm;
      confirm = options;
      options = {};
    }
    return createDialog(
      Object.assign({
        dialogType: 'prompt',
        showCloseButton: true
      }, options),
      confirm,
      close
    );
  }
  close () {
    instance.hide();
  }
}

export default new Dialog();
