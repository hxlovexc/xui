<template>
  <div class="row">
    <x-quote>
      <h4>标签</h4>
      <x-tag>Default</x-tag>
    </x-quote>
    <x-quote class="tag-types">
      <h4>大小分类</h4>
      <x-tag v-for="(item, index) in $size" :key="item" v-if="index < 2" :size="item">Default</x-tag>
    </x-quote>
    <x-quote class="tag-types">
      <h4>颜色类型分类</h4>
      <x-tag v-for="(item, index) in $types" :key="item" :type="item">{{item}}</x-tag>
    </x-quote>
    <x-quote class="tag-types">
      <h4>空心</h4>
      <x-tag v-for="(item, index) in $types" hollow :key="item" :type="item">{{item}}</x-tag>
    </x-quote>
    <x-quote class="tag-types">
      <h4>可关闭</h4>
      <x-tag @close="close(index)" v-for="(item, index) in list" closable :key="item">{{item}}</x-tag>
      </br>
      </br>
      <div>
        <x-tag :radius="false" v-for="(item, index) in list" closable hollow :key="item">{{item}}</x-tag>
      </div>
    </x-quote>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: ['标签一', '标签二', '标签三', '标签四', '标签五']
      };
    },
    methods: {
      close (index) {
        this.list.splice(index, 1);
      }
    }
  };
</script>


<style lang="scss">
  .tag-types{
    .x-tag{
      margin-right: 5px;
    }
  }
</style>

