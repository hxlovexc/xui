import Vue from 'vue';
import loading from 'components/x-loading/x-loading.vue';

const Loading = Vue.extend(loading);

// 显示切换
function toggleShow ({ $loading }, { value }) {
  $loading.show = value;
}

// 更新props值
function updateProps (vm, el) {
  const props = {};
  const text = el.getAttribute('x-loading-text');
  const type = el.getAttribute('x-loading-type');
  text && (props.text = text);
  type && (props.type = type);
  // 更新
  Object.assign(vm, props);
}

export default {
  bind (el, binding) {
    const vm = new Loading({
      el: document.createElement('div'),
      props: {
        text: 'text'
      }
    });
    el.$loading = vm;
    // 更新 props
    updateProps(vm, el);
    Vue.nextTick(() => {
      let parentEl = '';
      // 否是全局
      if (binding.modifiers.body) {
        parentEl = document.body;
      } else {
        parentEl = el;
      }
      // 添加class
      parentEl.classList.add('x-loading-box');
      toggleShow(el, binding);
      parentEl.appendChild(vm.$el);
    });
  },
  update (el, binding) {
    updateProps(el.$loading, el);
    toggleShow(el, binding);
  }
};
