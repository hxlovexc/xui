<template>
  <div>
    <!-- loading -->
    <div
      class="loading-box"
      v-loading="show"
    >
      <x-quote>
        <p>这个是内容</p>
      </x-quote>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        text: 'loading'
      };
    },
    mounted () {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    }
  };
</script>

<style lang="scss">
  .loading-box {
    width: 300px; 
    height: 300px;
    border: 1px solid #ddd;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    padding: 50px;
  }
</style>
