webpackJsonp([25],{Ot5o:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{base:'<x-menu>\n  <x-menu-item name="1">\n    <i class="x-icon-alert"></i>\n    菜单一\n  </x-menu-item>\n  <x-menu-item name="2">\n    <i class="x-icon-alert"></i>\n    菜单二\n  </x-menu-item>\n  <x-menu-item name="3">\n    <i class="x-icon-alert"></i>\n    菜单三\n  </x-menu-item>\n</x-menu>',subMenu:'<x-menu>\n  <x-menu-item name="1">菜单一</x-menu-item>\n  <x-submenu name="2">\n    <template slot="title">菜单二</template>\n    <x-menu-item name="1">菜单一</x-menu-item>\n    <x-menu-item name="2">菜单二</x-menu-item>\n    <x-menu-item name="3">菜单三</x-menu-item>\n  </x-submenu>\n  <x-menu-item name="3">菜单三</x-menu-item>\n</x-menu>',vertical:'<x-menu mode="vertical">\n  <x-menu-item name="1">\n    <i class="x-icon-alert"></i>\n    菜单一\n  </x-menu-item>\n  <x-menu-item name="2">\n    <i class="x-icon-alert"></i>\n    菜单二\n  </x-menu-item>\n  <x-menu-item name="3">\n    <i class="x-icon-alert"></i>\n    菜单三\n  </x-menu-item>\n</x-menu>',verticalSubMenu:'<x-menu mode="vertical">\n  <x-menu-item name="1">菜单一</x-menu-item>\n  <x-submenu name="2">\n    <template slot="title">菜单二</template>\n    <x-menu-item name="1">菜单一</x-menu-item>\n    <x-menu-item name="2">菜单二</x-menu-item>\n    <x-menu-item name="3">菜单三</x-menu-item>\n  </x-submenu>\n  <x-menu-item name="3">菜单三</x-menu-item>\n</x-menu>',theme:"primary",themeTpl:'<template>\n  <div>\n    <p>选择颜色类型:</p>\n    <x-radio-group size="small" v-model="theme">\n      <x-radio-button label="baise">baise</x-radio-button>\n      <x-radio-button label="primary">primary</x-radio-button>\n      <x-radio-button label="success">success</x-radio-button>\n      <x-radio-button label="warning">warning</x-radio-button>\n      <x-radio-button label="danger">danger</x-radio-button>\n      <x-radio-button label="dark">dark</x-radio-button>\n    </x-radio-group>\n  </div>\n\n  <x-menu :theme="theme">\n    <x-menu-item name="1">菜单一</x-menu-item>\n    <x-submenu name="2">\n      <template slot="title">菜单二</template>\n      <x-menu-item name="1">菜单一</x-menu-item>\n      <x-menu-item name="2">菜单二</x-menu-item>\n      <x-menu-item name="3">菜单三</x-menu-item>\n    </x-submenu>\n    <x-menu-item name="3">菜单三</x-menu-item>\n  </x-menu>\n  \n  \x3c!-- 垂直 --\x3e\n  <div style="width:200px">\n    <x-menu mode="vertical" :theme="theme">\n      <x-menu-item name="1">菜单一</x-menu-item>\n      <x-submenu name="2">\n        <template slot="title">菜单二</template>\n        <x-menu-item name="1">菜单一</x-menu-item>\n        <x-menu-item name="2">菜单二</x-menu-item>\n        <x-menu-item name="3">菜单三</x-menu-item>\n      </x-submenu>\n      <x-menu-item name="3">菜单三</x-menu-item>\n    </x-menu>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        theme: \'primary\'\n      };\n    }\n  };\n<\/script>',menuProps:[{attribute:"active",explain:"当前激活的导航",type:"String | Number",values:"---",default:"---"},{attribute:"mode",explain:"导航展示类型",type:"String | Number",values:"level | vertical",default:"level"},{attribute:"theme",explain:"颜色类型",type:"String | Number",values:"baise | primary | success | warning | danger | dark",default:"primary"}],itemProps:[{attribute:"name",explain:"菜单唯一标识",type:"String | Number",values:"---",default:"---"}],events:[{events:"select",explain:"菜单选择时的回调",params:"当前菜单的name"}]}}}},ixIo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Ot5o"),m=n.n(a),i=n("u60H"),s=n("VU/8"),u=s(m.a,i.a,null,null,null);t.default=u.exports},u60H:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("基础")]),e._v(" "),n("p",[e._v("每一个 x-menut-item 或者 x-submenu都应该设置一个name, 为唯一标识")]),e._v(" "),n("x-quote",[n("x-menu",[n("x-menu-item",{attrs:{name:"1"}},[n("i",{staticClass:"x-icon-alert"}),e._v("\n          菜单一\n        ")]),e._v(" "),n("x-menu-item",{attrs:{name:"2"}},[n("i",{staticClass:"x-icon-alert"}),e._v("\n          菜单二\n        ")]),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[n("i",{staticClass:"x-icon-alert"}),e._v("\n          菜单三\n        ")])],1),e._v(" "),n("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[e._v(e._s(e.base))])],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("二级菜单")]),e._v(" "),n("x-quote",[n("x-menu",[n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-menu-item",{attrs:{name:"2"}},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],1),e._v(" "),n("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[e._v(e._s(e.subMenu))])],1)],1),e._v(" "),n("h3",{staticClass:"row-title"},[e._v("垂直展示")]),e._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("默认")]),e._v(" "),e._m(1),e._v(" "),n("x-quote",[n("x-menu",[n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-menu-item",{attrs:{name:"2"}},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],1),e._v(" "),n("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[e._v(e._s(e.vertical))])],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("二级菜单 (垂直)")]),e._v(" "),n("x-quote",[n("div",{staticStyle:{width:"200px"}},[n("x-menu",{attrs:{mode:"vertical"}},[n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-menu-item",{attrs:{name:"2"}},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],1)],1),e._v(" "),n("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[e._v(e._s(e.verticalSubMenu))])],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("颜色类型")]),e._v(" "),e._m(2),e._v(" "),n("x-quote",[n("div",[n("p",[e._v("选择颜色类型:")]),e._v(" "),n("x-radio-group",{attrs:{size:"small"},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}},[n("x-radio-button",{attrs:{label:"baise"}},[e._v("baise")]),e._v(" "),n("x-radio-button",{attrs:{label:"primary"}},[e._v("primary")]),e._v(" "),n("x-radio-button",{attrs:{label:"success"}},[e._v("success")]),e._v(" "),n("x-radio-button",{attrs:{label:"warning"}},[e._v("warning")]),e._v(" "),n("x-radio-button",{attrs:{label:"danger"}},[e._v("danger")]),e._v(" "),n("x-radio-button",{attrs:{label:"dark"}},[e._v("dark")])],1)],1),e._v(" "),n("br"),e._v(" "),n("x-menu",{attrs:{theme:e.theme}},[n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-menu-item",{attrs:{name:"2"}},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],1),e._v(" "),n("br"),e._v(" "),n("div",{staticStyle:{width:"200px"}},[n("x-menu",{attrs:{mode:"vertical",theme:e.theme}},[n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"1"}},[e._v("菜单一")]),e._v(" "),n("x-menu-item",{attrs:{name:"2"}},[e._v("菜单二")]),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"3"}},[e._v("菜单三")])],1)],1),e._v(" "),n("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[e._v(e._s(e.themeTpl))])],1)],1),e._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("API")]),e._v(" "),n("h4",[e._v("menu props")]),e._v(" "),n("api-table",{attrs:{data:e.menuProps,keys:e.$propsKeys}}),e._v(" "),n("h4",[e._v("x-menu-item & x-submenu props")]),e._v(" "),n("api-table",{attrs:{data:e.itemProps,keys:e.$propsKeys}}),e._v(" "),n("h4",[e._v("x-menu events")]),e._v(" "),n("api-table",{attrs:{data:e.events,keys:e.$eventKeys}})],1)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("h3",{staticClass:"row-title"},[e._v("menu 警告提示")]),e._v(" "),n("p",[e._v("导航菜单分为顶部导航和侧边导航，是为页面提供导航功能")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("可以通过设置 "),n("span",{staticClass:"highlighted"},[e._v("mode")]),e._v(" 属性为 vertical 让导航垂直展示, 默认 level")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n      可以通过设置 "),n("span",{staticClass:"highlighted"},[e._v("theme")]),e._v("属性修改菜单颜色类型, 总共有六种类型:\n      "),n("span",{staticClass:"highlighted"},[e._v("baise, primary, success, warning, danger, dark")]),e._v("\n      默认 "),n("span",{staticClass:"highlighted"},[e._v("primary")])])}],i={render:a,staticRenderFns:m};t.a=i}});
//# sourceMappingURL=25.8a8391da1ac2d6793527.js.map