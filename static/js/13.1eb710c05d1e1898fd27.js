webpackJsonp([13],{CUTl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Ptc/"),l=e.n(s),r=e("wlSi"),i=e("VU/8"),n=i(l.a,r.a,null,null,null);a.default=n.exports},"Ptc/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={data:function(){return{base:"<x-tag>tag</x-tag>",size:'<x-tag size="large">大的</x-tag>\n<x-tag size="default">默认</x-tag>',types:'<x-tag type="default">default</x-tag>\n<x-tag type="primary">primary</x-tag>\n<x-tag type="success">success</x-tag>\n<x-tag type="warning">warning</x-tag>\n<x-tag type="danger">danger</x-tag>\n<x-tag type="dark">dark</x-tag>',hollow:'<x-tag type="default" hollow>default</x-tag>\n<x-tag type="primary" hollow>primary</x-tag>\n<x-tag type="success" hollow>success</x-tag>\n<x-tag type="warning" hollow>warning</x-tag>\n<x-tag type="danger" hollow>danger</x-tag>\n<x-tag type="dark" hollow>dark</x-tag>',closable:'<x-tag closable @close="close" type="default">default</x-tag>\n<x-tag closable @close="close" type="primary">primary</x-tag>\n<x-tag closable @close="close" type="success">success</x-tag>\n<x-tag closable @close="close" type="warning">warning</x-tag>\n<x-tag closable @close="close" type="danger">danger</x-tag>\n<x-tag closable @close="close" type="dark">dark</x-tag>',noRadius:'<x-tag :radius="false">tag</x-tag>',apiData:[{attribute:"type",explain:"设置标签类型",type:"String",values:"primary | success | warning | danger | dark",default:"primary"},{attribute:"radius",explain:"设置标签为圆角",type:"Boolean",values:"true | false",default:"true"},{attribute:"size",explain:"设置标签大小",type:"String",values:"large | default",default:"default"},{attribute:"hollow",explain:"设置标签为空心",type:"Boolean",values:"true | false",default:"false"},{attribute:"closable",explain:"让标签可关闭",type:"Boolean",values:"true | false",default:"false"}],eventsData:[{events:"close",explain:"标签点击关闭执行的事件(使用这个事件时closable必须为true)",params:"event"}]}},methods:{tagClick:function(t){alert(t)}}}},wlSi:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("基础")]),t._v(" "),e("x-quote",[e("x-tag",[t._v("tag")]),t._v(" "),e("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.base))])],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("颜色分类")]),t._v(" "),t._m(1),t._v(" "),e("x-quote",[e("div",t._l(t.$types,function(a){return"default"!==a?e("x-tag",{key:a,staticClass:"margin-10",attrs:{type:a}},[t._v(t._s(a))]):t._e()})),t._v(" "),e("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.types))])],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("取消圆角")]),t._v(" "),e("p",[t._v("可以通过设置 radius 为 false 取消标签的圆角")]),t._v(" "),e("x-quote",[e("x-tag",{attrs:{radius:!1}},[t._v("tag")]),t._v(" "),e("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.noRadius))])],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("size分类")]),t._v(" "),t._m(2),t._v(" "),e("x-quote",[e("div",[e("x-tag",{staticClass:"margin-10",attrs:{size:"large"}},[t._v("大的")]),t._v(" "),e("x-tag",{staticClass:"margin-10",attrs:{size:"default"}},[t._v("默认")])],1),t._v(" "),e("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.size))])],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("空心")]),t._v(" "),e("p",[t._v("可以通过 hollow 设置标签为空心 - 默认false")]),t._v(" "),e("x-quote",[e("div",t._l(t.$types,function(a){return"default"!==a?e("x-tag",{key:a,staticClass:"margin-10",attrs:{hollow:"",type:a}},[t._v(t._s(a))]):t._e()})),t._v(" "),e("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.hollow))])],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("可关闭")]),t._v(" "),t._m(3),t._v(" "),e("x-quote",[e("div",t._l(t.$types,function(a){return"default"!==a?e("x-tag",{key:a,staticClass:"margin-10",attrs:{closable:"",type:a},on:{close:function(e){t.tagClick(a)}}},[t._v(t._s(a))]):t._e()})),t._v(" "),e("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.closable))])],1)],1),t._v(" "),e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("API")]),t._v(" "),e("h4",[t._v("props")]),t._v(" "),e("api-table",{attrs:{data:t.apiData,keys:t.$propsKeys}}),t._v(" "),e("h4",[t._v("events")]),t._v(" "),e("api-table",{attrs:{data:t.eventsData,keys:t.$eventKeys}})],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("h3",{staticClass:"row-title"},[t._v("tag 标签")]),t._v(" "),e("p",[t._v("对不同事物的属性进行标记和分类")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("\n      可以通过 type 属性设置标签的颜色， 标签有五种类型:\n      "),e("span",{staticClass:"highlighted"},[t._v("primary, success, warning, danger, dark")]),t._v("\n      默认 "),e("span",{staticClass:"highlighted"},[t._v("primary")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("\n      可以通过 size 属性设置标签的大小， 标签只有两种大小:\n      "),e("span",{staticClass:"highlighted"},[t._v("large(最大), default(默认)")]),t._v("\n       - 默认 "),e("span",{staticClass:"highlighted"},[t._v("default")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("\n      可以通过设置 closable 让标签可以关闭, 点击后会执行"),e("span",{staticClass:"highlighted"},[t._v("close")]),t._v("事件")])}],r={render:s,staticRenderFns:l};a.a=r}});
//# sourceMappingURL=13.1eb710c05d1e1898fd27.js.map