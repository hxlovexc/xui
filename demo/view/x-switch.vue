<template>
<div class="row">
  <div class="row">
    <h4>开关</h4>
    <x-switch v-model="value"></x-switch>
    <span>{{value}}</span>
  </div>
  </br>

   <div class="row">
    <h4>动态修改状态</h4>
    <x-switch v-model="value2"></x-switch>
    &nbsp;&nbsp;<x-button size="small" @click="value2 = !value2">{{value2 ? '关闭' : '打开'}}</x-button>
  </div>
  </br>

  <div class="row">
    <h4>大小分类</h4>
    <div class="row" v-for="item in $size" :key="item" v-if="item !== 'mini'">
      <x-switch :size="item"></x-switch>
    </div>
  </div>
  </br>

  <div class="row">
    <h4>颜色分类</h4>
    <div class="row" v-for="item in $types" :key="item" v-if="item !== 'mini'">
      <x-switch :type="item"></x-switch>
    </div>
  </div>
  </br>

  <div class="row">
    <h4>自定义text</h4>
    <div class="row" v-for="item in $size" :key="item" v-if="item !== 'mini'">
      <x-switch :size="item" open-text="开打" close-text="关闭"></x-switch>
    </div>
  </div>
  </br>

  <div class="row">
    <h4>禁用</h4>
    <div class="row" v-for="item in $size" :key="item" v-if="item !== 'mini'">
      <x-switch disabled :size="item"></x-switch>
    </div>
  </div>
  </br>

  <div class="row">
    <h4>change事件</h4>
    <x-switch @change="change" v-model="switchValue"></x-switch>
    <span>{{switchValue}}</span>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        value: '',
        switchValue: '',
        value2: true
      };
    },
    methods: {
      change (value, el) {
        console.log(el);
        alert(value ? '当前为选中状态' : '当前为关闭状态');
      }
    }
  };
</script>

