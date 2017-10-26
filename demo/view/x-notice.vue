<template>
  <x-quote>
    <h4>x-notice-默认</h4>
    <div class="row">
      <x-button @click="notice('')">default</x-button>
    </div>
    </br>

    <h4>类型</h4>
    <div class="row types">
      <x-button
        @click="notice('')"
      >default</x-button>
      <x-button
        v-if="item !== 'primary'"
        v-for="item in $types"
        :key="item"
        :type="item"
        @click="notice(item)"
      >{{item}}</x-button>
    </div>
    </br>

    <h4>带标题</h4>
    <div class="row types">
      <x-button
        @click="notice('', 'hello 我是标题')"
      >default</x-button>
      <x-button
        v-if="item !== 'primary'"
        v-for="item in $types"
        :key="item"
        :type="item"
        @click="notice(item, 'hello 我是标题')"
      >{{item}}</x-button>
    </div>
    </br>

    <h4>不带关闭按钮</h4>
    <div class="row types">
      <x-button
        @click="notice('', 'hello 我是标题', false)"
      >default</x-button>
      <x-button
        v-if="item !== 'primary'"
        v-for="item in $types"
        :key="item"
        :type="item"
        @click="notice(item, 'hello 我是标题', false)"
      >{{item}}</x-button>
    </div>
    </br>

    <h4>不自动关闭</h4>
    <div class="row types">
      <x-button
        @click="notice('', '', true, 0)"
      >default</x-button>
      <x-button
        v-if="item !== 'primary'"
        v-for="item in $types"
        :key="item"
        :type="item"
        @click="notice(item, '', true, 0)"
      >{{item}}</x-button>
    </div>
    </br>

    <h4>关闭</h4>
    <div class="row types">
      <x-button @click="shownotice('test')">打开</x-button>
      <x-button @click="close('test')">关闭</x-button>
      <x-button @click="close()">关闭全部</x-button>
    </div>
  </x-quote>
</template>

<script>
  let index = 0;
  export default {
    data () {
      return {
        noticeVm: ''
      };
    },
    methods: {
      notice (type, title, closeButton = true, timer = 6000) {
        let name = !type ? this.$notice : this.$notice[type];
        name(`hello我是notice`, {
          timer: timer,
          title: title,
          showClose: closeButton
        }, null, null);
      },
      shownotice (name) {
        index++;
        this.noticeVm = this.$notice(`hello我是notice${index}`, {
          name: name,
          title: '我已经打开'
        });
      },
      close (name) {
        this.$notice.close(name);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .types{
    .x-button{
      margin-right: 5px;
    }
  }
</style>

