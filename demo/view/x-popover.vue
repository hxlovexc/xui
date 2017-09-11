<template>
  <div class="popover">
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    <x-popover v-model="show">
      <x-button>default</x-button>
      <div slot="content">
        <span>{{msg}}是否确定删除此文章?</span>
        <div style="margin-top:10px;" class="x-text-r">
          <x-button radius size="mini" @click="show = false">取消</x-button>
          <x-button radius size="mini" @click="show = false" type="danger">删除</x-button>
        </div>
      </div>
    </x-popover>
    </br>
    </br>
    <span v-for="item in events" :key="item">
      <x-popover :trigger="item" :type="item">
        <x-button>{{item}}</x-button>
        <span slot="content">{{item}}</span>
      </x-popover>
    </span></br></br>
    <x-popover @change="change" trigger="click" v-model="show1">
      <x-button>show</x-button>
      <x-button slot="content" @click="show1 = false">这个是内容啊发生阿萨德</x-button>
    </x-popover>
    <x-button @click="show1 = true">显示</x-button>
    <x-button @click="show1 = false">隐藏</x-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        show: false,
        show1: false,
        events: ['click', 'hover', 'focus']
      };
    },
    methods: {
      change (state) {
        console.log(state);
      }
    }
  };
</script>

<style scoped>
  .popover > span {
    display: inline-block;
    margin: 10px;
  }
</style>
