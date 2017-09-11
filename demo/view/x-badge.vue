<template>
  <div class="row">
    <h4>徽章</h4>
    <div class="row">
      <x-badge>1</x-badge>
      </br>
    </div>

    <div class="row" style="display: inline-block;">
      <h4>颜色分类</h4>
      <span v-for="item in $types" :key="item">
        <x-badge :type="item">1</x-badge>&nbsp;
      </span>
      </br>
    </div>
    </br>

    <div class="row" style="display: inline-block;">
      <h4>大小</h4>
      <span v-for="(item, index) in $size" :key="item" v-if="index < 2">
        <x-badge :size="item">1</x-badge>&nbsp;
      </span>
      </br>
    </div>
  </div>
</template>
