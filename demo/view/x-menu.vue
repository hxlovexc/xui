<template>
  <div class="menu">
    <x-menu class="menu" type="baise" @select="select">
      <template slot="logo">LOGO</template>
      <x-menu-item name="1">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="2">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="3">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="4">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="5">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
    </x-menu>
    <x-menu class="menu" v-for="(item, index) in $types" :key="index" :type="item" @select="select">
      <x-menu-item name="1">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="2">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="3">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="4">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
      <x-menu-item name="5">
        <i class="x-icon-alert"></i>
        啊哈
      </x-menu-item>
    </x-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {
      select (key, path) {
        console.log(key, path);
      }
    }
  };
</script>


<style scoped lang="scss">
  .menu{
    margin-bottom: 10px;
  }
</style>
