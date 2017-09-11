<template>
<div class="row">
  <div class="row">
    <h4>选项卡-默认</h4>
    <x-tabs>
      <x-tab-item v-for="(item, index) in list" :key="item" :label="item">
        选项卡内容{{item}}
      </x-tab-item>
    </x-tabs>
  </div>
  </br>

  <div class="row">
    <h4>选项卡-卡片</h4>
    <x-tabs type="card">
      <x-tab-item :checked="index === 1" v-for="(item, index) in list" :key="item" :label="'导航' + item">选项卡内容{{item}}</x-tab-item>
    </x-tabs>
  </div>
  </br>

  <div class="row">
    <h4>禁用</h4>
    <div class="row">
      <h5>默认</h5>
      <x-tabs>
        <x-tab-item v-for="(item, index) in list" :disabled="index === 2" :key="item" :label="item">
          选项卡内容{{item}}
        </x-tab-item>
      </x-tabs>
    </div>
    </br>

    <div class="row">
      <h5>卡片</h5>
      <x-tabs type="card">
        <x-tab-item v-for="(item, index) in list" :key="item" :disabled="index === 2" :label="'导航' + item">选项卡内容{{item}}</x-tab-item>
      </x-tabs>
    </div>
  </div>
  </br>

  <div class="row">
    <h4>动态修改 <x-button size="mini" @click="tabs = 1">显示第二个</x-button></h4>
    <x-tabs v-model="tabs">
      <x-tab-item :name="index" v-for="(item, index) in list" :key="item" :label="item">
        选项卡内容{{item}}
      </x-tab-item>
    </x-tabs>
  </div>
  </br>

  <div class="row">
    <h4>change事件</h4>
    <x-tabs @change="change">
      <x-tab-item v-for="(item, index) in list" :key="item" :label="item">
        选项卡内容{{item}}
      </x-tab-item>
    </x-tabs>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: '',
        selected: 1,
        list: ['选项1', '选项-11', '选项-111', '选项-1111', '选项-11111']
      };
    },
    methods: {
      change (value) {
        alert(`当前点击的是第${value + 1}个`);
      }
    }
  };
</script>
