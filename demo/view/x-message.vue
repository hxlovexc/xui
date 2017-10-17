<template>
  <div>
    <h4>x-message</h4>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$message.success('hello'));
    }
  };
</script>
