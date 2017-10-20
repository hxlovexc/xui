<template>
  <div class="hello">
    <h4>
      <a href="/">wer</a>
    </h4>
   <h4 v-tooltip.topleft="msg" class="primary">hello xui</h4>
   <h4 class="success">hello xui</h4>
   <h4 class="warning">hello xui</h4>
   <h4 class="danger">hello xui</h4>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '123456'
      };
    }
  };
</script>
