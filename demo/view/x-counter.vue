<template>
  <div>
    <h4>计数器</h4>
    <div class="row">
      <p>当前数量为 => {{length}}</p>
      <x-counter v-model="length"></x-counter>
    </div>
    </br>

    <h4>大小</h4>
    <div class="row" v-for="item in $size" v-if="item !== 'mini'">
      <x-counter :size="item"></x-counter>
    </div>
    </br>

    <h4>颜色分类</h4>
    <div class="row" v-for="item in $types">
      <x-counter :type="item"></x-counter>
    </div>
    </br>

    <h4>禁用</h4>
    <div class="row" v-for="item in $size" v-if="item !== 'mini'">
      <x-counter disabled :size="item"></x-counter>
    </div>
    </br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        length: 0
      };
    }
  };
</script>

