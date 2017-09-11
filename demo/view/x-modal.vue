<template>
  <div>
    <span v-for="(item, index) in $size" :key="item">
      <x-button v-if="index < $size.length - 1" @click="model[item] = true">大小-{{item}}</x-button>&nbsp;&nbsp;&nbsp;
    </span>
    <x-button @click="show = true">事件</x-button>
    <x-modal
      v-if="index < $size.length - 1"
      v-for="(item, index) in $size"
      :key="item"
      title="这个是标题"
      v-model="model[item]"
      :size="item"
      @mask-click="model[item] = false"
    >
      <p>这个是内容</p>
    </x-modal>
    <!--事件-->
    
    <x-modal
      v-model="show"
      title="提示"
      @mask-click="show = false"
      :close="close"
    >
      <template>
        <x-quote>close方法会阻塞组件自动关闭-需要执行回调函数才能关闭</x-quote>
      </template>
        <template slot="footer">
        <x-button @click="close">取消</x-button>
        <x-button type="primary" @click="show = false">确定</x-button>
      </template>
    </x-modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        model: {
          large: false,
          default: false,
          small: false
        }
      };
    },
    methods: {
      close (close) {
        this.$confirm('是否确认关闭?')
          .then((data) => {
            close();
          })
          .catch(() => {});
      }
    }
  };
</script>
