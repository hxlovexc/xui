<template>
  <div class="row">
    <h4>进度条</h4>
    <div class="row">
      <h5>默认</h5>
      <x-progress :percentage="60"></x-progress>
    </div>
    </br>

    <div class="row">
      <h5>颜色分类</h5>
      <div class="row" v-for="item in $types" :key="item">
        <x-progress :percentage="60" :type="item"></x-progress>
      </div>
    </div>
    </br>

    <div class="row">
      <h5>大小分类</h5>
      <div class="row" v-if="item !== 'mini'" v-for="item in $size" :key="item">
        <x-progress :percentage="60" :size="item"></x-progress>
      </div>
    </div>
    </br>

    <div class="row">
      <h5>圆角</h5>
      <div class="row" v-if="item !== 'mini'" v-for="item in $size" :key="item">
        <x-progress :percentage="60" radius :size="item"></x-progress>
      </div>
    </div>
    </br>

    <div class="row">
      <h5>环形</h5>
      <div class="row">
        <x-progress v-if="item !== 'default'" v-for="item in $types" :type="item" :key="item" circle :percentage="l"></x-progress>
      </div>
      </br>
      <x-button @click="l++">添加</x-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        l: 95
      };
    }
  };
</script>
