<template>
  <div>
    <h4>x-message</h4>
    <p>
      <span>
        <x-button @click="message()">default</x-button>&nbsp;
      </span>
      <span v-for="item in $types" :key="item">
        <x-button @click="message(item)" :type="item">{{item}}</x-button>&nbsp;
      </span>
    </p>
    </br>
    <div>
      <h4>不自动关闭</h4>
      <span>
        <x-button @click="noClose">打开</x-button>&nbsp;
        <x-button @click="close">关闭</x-button>&nbsp;
      </span>
    </div>
    </br>
    <div>
      <h4>关闭全部</h4>
      <span>
        <x-button @click="closeAll">关闭全部</x-button>
      </span>
    </div>
  </div>
</template>

<script>
  import aa from '../../dist/lib/x-button';

  console.log(aa);

  export default {
    data () {
      return {
        box: ''
      };
    },
    methods: {
      message (type) {
        const fun = type ? this.$message[type] : this.$message;
        fun(type || 'default');
      },
      noClose () {
        if (this.box) return;
        this.box = this.$message.loading('不自动关闭', {
          timer: 0
        });
      },
      close () {
        if (!this.box) return;
        this.box();
        this.box = '';
      },
      closeAll () {
        this.$message.closeAll();
      }
    }
  };
</script>
