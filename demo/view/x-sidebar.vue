<template>
  <div class="x-sidebar">
    <h4>侧边栏</h4>
    <x-button @click="left = true">显示左边</x-button>
    <x-button @click="right = true">显示右边</x-button>
    <!--left-->
    <x-sidebar v-model="left">
      <div class="sidebar-content">
        <x-quote>我是左边侧栏</x-quote>
      </div>
    </x-sidebar>
    <!--right-->
    <x-sidebar v-model="right" direction="right">
      <div class="sidebar-content">
        <x-quote>我是右边侧栏</x-quote>
      </div>
    </x-sidebar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        left: false,
        right: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  .x-sidebar{
    width: 500px;
  }

  .sidebar-content{
    width: 300px;
    padding: 15px;
  }
</style>
