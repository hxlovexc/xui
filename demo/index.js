import Vue from 'vue';
import router from './router';
import xui from '../src/main';
import './static/demo.scss';
import 'es6-promise/auto';

Vue.use(xui);

// 类型
Vue.prototype.$types = [
  'primary',
  'success',
  'warning',
  'danger',
  'dark'
];

// 大小
Vue.prototype.$size = [
  'large',
  'default',
  'small',
  'mini'
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
});
