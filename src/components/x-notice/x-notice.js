/*
  * @Module: notice提示
 * @Author: 小缘
 * @Date: 2017-07-23 21:13:36
 */
import Vue from 'vue';
import noticeTpl from './x-notice.vue';

let instance = '';
// 默认配置
const defaultConfig = {
  name: '',
  title: '',
  message: '',
  type: '',
  timer: 5000,
  showIcon: true,
  showClose: true,
  clickBack: '',
  close: '',
  icon: ''
};
// 类型
const types = ['success', 'warning', 'danger', 'dark'];
// 临时存放type
let type = 'primary';

// 初始化
function initInstance () {
  let InstanceClass = Vue.extend(noticeTpl);
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

// 创建notice
function createNotice (options, clickBack, close) {
  let config = {};
  const name = options.name || `x-notice-${Date.now()}`;
  // 禁止重复创建
  if (instance === '') {
    initInstance();
  }
  Object.assign(config, options, {
    name: name
  });
  showNotice(config);
  return () => {
    instance.close(name);
  };
}

// 初始化
function initNotice (message, options = {}, clickBack, close) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof message !== 'string' && typeof message !== 'number') {
      console.error('xui -> (x-dialog组件) : message不能为空, 并且类型只能为 String 或 Number');
      return;
    }
  }
  if (typeof options === 'function') {
    close = clickBack;
    clickBack = options;
    options = {};
  }
  // 类型
  options.type = type;
  return createNotice(
    Object.assign({}, defaultConfig, {
      message,
      clickBack,
      close
    }, options),
    clickBack,
    close
  );
}

function Notice () {
  return initNotice.apply(this, arguments);
}

types.forEach((item) => {
  // 嵌套尖头函数获取arguments的时候会是第一个函数的, 所以用普通函数
  Notice[item] = function (message, options, clickBack, close) {
    type = item;
    return initNotice.apply(this, arguments);
  };
});

// 关闭函数
Notice.close = (name) => {
  if (!instance) {
    console.info('xui -> (x-notice组件) : 当前没有任何通知');
    return;
  }
  name ? instance.close(name) : instance.close();
};

export default Notice;
