<template>
  <x-quote>
    <h4>x-dialog</h4>
    <x-button @click="alert">alert</x-button>
    <x-button @click="confirm">confirm</x-button>
    <x-button @click="prompt">prompt</x-button>
  </x-quote>
</template>

<script>
  export default {
    methods: {
      alert () {
        this.$dialog.alert('hello xui', {
          title: '自定义标题',
          type: 'info'
        }, () => {
          this.$notice('点击了确定');
        }, () => {
          this.$notice('点击了取消');
        });
      },
      confirm () {
        this.$dialog.confirm('程序员是不是很有意思?', {
          type: 'error'
        }, () => {
          console.log('确定');
        }, (data) => {
          console.log('取消');
        });
      },
      prompt () {
        this.$dialog.prompt({
          promptRequired: true,
          mask: false
        })
          .then((value) => {
            alert(`你输入了: ${value}`);
          })
          .catch((value) => {
            alert('你点击了取消');
            console.log(value);
          });
      }
    },
    mounted () {
      window.cel = this.$createElement;
    }
  };
</script>
