<template>
  <div>
    <h3>引用</h3>
    <x-quote>xui前端ui框架 - 默认</x-quote>
    <x-quote v-for="item in $types" :type="item" :key="item">xui前端ui框架 - {{item}}</x-quote>
    <h3>圆角</h3>
    <x-quote v-for="item in $types" radius :type="item" :key="item">xui前端ui框架</x-quote>
    <h3>显示背景</h3>
    <x-quote v-for="item in $types" show-bg :type="item" :key="item">xui前端ui框架</x-quote>
  </div>
</template>
