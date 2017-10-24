/*
 * @Module: 框架入口
 * @Author: 小缘
 * @Date: 2017-05-14 19:21:54
 */
// 组建
import xQuote from 'components/x-quote/x-quote.vue';
import xButton from 'components/x-button/x-button.vue';
import xButtonGroup from 'components/x-button-group/x-button-group.vue';
import xInput from 'components/x-input/x-input.vue';
import xTextarea from 'components/x-textarea/x-textarea.vue';
import xCounter from 'components/x-counter/x-counter.vue';
import xCheckboxGroup from 'components/x-checkbox-group/x-checkbox-group.vue';
import xCheckboxButton from 'components/x-checkbox-button/x-checkbox-button.vue';
import xCheckbox from 'components/x-checkbox/x-checkbox.vue';
import xRadioGroup from 'components/x-radio-group/x-radio-group.vue';
import xRadioButton from 'components/x-radio-button/x-radio-button.vue';
import xRadio from 'components/x-radio/x-radio.vue';
import xSelect from 'components/x-select/x-select.vue';
import xOption from 'components/x-select/x-option.vue';
import xSelectGroup from 'components/x-select-group/x-select-group.vue';
import xSwitch from 'components/x-switch/x-switch.vue';
import xSlider from 'components/x-slider/x-slider.vue';
import xScrollBar from 'components/x-scroll-bar/x-scroll-bar.vue';
import xTabs from 'components/x-tabs/x-tabs.vue';
import xTabItem from 'components/x-tabs/x-tab-item.vue';
import xCollapse from 'components/x-collapse/x-collapse.vue';
import xCollapseItem from 'components/x-collapse/x-collapse-item.vue';
import xProgress from 'components/x-progress/x-progress.vue';
import xBadge from 'components/x-badge/x-badge.vue';
import xForm from 'components/x-form/x-form.vue';
import xFormItem from 'components/x-form/x-form-item.vue';
import xTag from 'components/x-tag/x-tag.vue';
import xAlert from 'components/x-alert/x-alert.vue';
import xModal from 'components/x-modal/x-modal.vue';
import xSidebar from 'components/x-sidebar/x-sidebar.vue';
import xMenu from 'components/x-menu/x-menu.vue';
import xMenuItem from 'components/x-menu/x-menu-item.vue';
import xSubmenu from 'components/x-submenu/x-submenu.vue';
import xTable from 'components/x-table/x-table.js';
import xTableColumn from 'components/x-table/x-table-column.js';
import xPopover from 'components/x-popover/x-popover.js';
import xPage from 'components/x-page/x-page.vue';
import xUpload from 'components/x-upload/x-upload.vue';

// 方法
import dialog from 'components/x-dialog/x-dialog.js';
import notice from 'components/x-notice/x-notice.js';
import message from 'components/x-message/x-message.js';

// 指令
// import clickoutside from 'directives/click-outside';
import tooltip from 'directives/x-tooltip/x-tooltip.js';

// 组建集合
let xui = {
  xQuote,
  xButton,
  xButtonGroup,
  xInput,
  xTextarea,
  xCounter,
  xCheckboxGroup,
  xCheckbox,
  xCheckboxButton,
  xRadioGroup,
  xRadio,
  xRadioButton,
  xSelect,
  xOption,
  xSelectGroup,
  xSwitch,
  xScrollBar,
  xSlider,
  xTabs,
  xTabItem,
  xCollapse,
  xCollapseItem,
  xProgress,
  xBadge,
  xForm,
  xFormItem,
  xTag,
  xAlert,
  xModal,
  xSidebar,
  xMenu,
  xMenuItem,
  xSubmenu,
  xTable,
  xTableColumn,
  xPopover,
  xPage,
  xUpload
};

// 框架方法集合
const methods = {
  dialog,
  notice,
  message
};

// 指令集合
const directives = {
  // 点击非指定对象执行回调
  // clickoutside,
  tooltip
};

function install (Vue) {
  if (install.installed) return;

  // 组建集成
  for (let name in xui) {
    Vue.component(name, xui[name]);
  }

  // 方法集成
  for (let name in methods) {
    Vue.prototype[`$${name}`] = methods[name];
  }

  // 指令集成
  for (let item in directives) {
    Vue.directive(item, directives[item]);
  }
}

// 全局模式下自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
} else {
  xui.install = install;
}

module.exports = xui;
