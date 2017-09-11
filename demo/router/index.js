import Vue from 'vue';
import Router from 'vue-router';
import 'es6-promise/auto';

Vue.use(Router);

let routes = [
  // 案例
  {
    path: '/',
    component (resolve) {
      require(['../view/demo.vue'], resolve);
    }
  },
  {
    path: '/icon',
    component (resolve) {
      require(['../view/icon.vue'], resolve);
    }
  },
  {
    path: '/x-quote',
    component (resolve) {
      require(['../view/x-quote.vue'], resolve);
    }
  },
  {
    path: '/x-button',
    component (resolve) {
      require(['../view/x-button.vue'], resolve);
    }
  },
  {
    path: '/x-input',
    component (resolve) {
      require(['../view/x-input.vue'], resolve);
    }
  },
  {
    path: '/x-textarea',
    component (resolve) {
      require(['../view/x-textarea.vue'], resolve);
    }
  },
  {
    path: '/x-counter',
    component (resolve) {
      require(['../view/x-counter.vue'], resolve);
    }
  },
  {
    path: '/x-checkbox',
    component (resolve) {
      require(['../view/x-checkbox.vue'], resolve);
    }
  },
  {
    path: '/x-radio',
    component (resolve) {
      require(['../view/x-radio.vue'], resolve);
    }
  },
  {
    path: '/x-select',
    component (resolve) {
      require(['../view/x-select.vue'], resolve);
    }
  },
  {
    path: '/x-switch',
    component (resolve) {
      require(['../view/x-switch.vue'], resolve);
    }
  },
  {
    path: '/x-slider',
    component (resolve) {
      require(['../view/x-slider.vue'], resolve);
    }
  },
  {
    path: '/x-tabs',
    component (resolve) {
      require(['../view/x-tabs.vue'], resolve);
    }
  },
  {
    path: '/x-collapse',
    component (resolve) {
      require(['../view/x-collapse.vue'], resolve);
    }
  },
  {
    path: '/x-progress',
    component (resolve) {
      require(['../view/x-progress.vue'], resolve);
    }
  },
  {
    path: '/x-badge',
    component (resolve) {
      require(['../view/x-badge.vue'], resolve);
    }
  },
  {
    path: '/x-form',
    component (resolve) {
      require(['../view/x-form.vue'], resolve);
    }
  },
  {
    path: '/x-tag',
    component (resolve) {
      require(['../view/x-tag.vue'], resolve);
    }
  },
  {
    path: '/x-alert',
    component (resolve) {
      require(['../view/x-alert.vue'], resolve);
    }
  },
  {
    path: '/x-dialog',
    component (resolve) {
      require(['../view/x-dialog.vue'], resolve);
    }
  },
  {
    path: '/x-notice',
    component (resolve) {
      require(['../view/x-notice.vue'], resolve);
    }
  },
  {
    path: '/x-modal',
    component (resolve) {
      require(['../view/x-modal.vue'], resolve);
    }
  },
  {
    path: '/x-sidebar',
    component (resolve) {
      require(['../view/x-sidebar.vue'], resolve);
    }
  },
  {
    path: '/x-menu',
    component (resolve) {
      require(['../view/x-menu.vue'], resolve);
    }
  },
  {
    path: '/x-table',
    component (resolve) {
      require(['../view/x-table.vue'], resolve);
    }
  },
  {
    path: '/x-tooltip',
    component (resolve) {
      require(['../view/x-tooltip.vue'], resolve);
    }
  },
  {
    path: '/x-page',
    component (resolve) {
      require(['../view/x-page.vue'], resolve);
    }
  },
  {
    path: '/x-popover',
    component (resolve) {
      require(['../view/x-popover.vue'], resolve);
    }
  }
];

export default new Router({
  routes
});
