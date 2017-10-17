<template>
  <div>
    <h1>xMessage</h1>
  </div>
</template>

<script>
  export default {
    methods: {
      close () {
        alert('close');
      },
      add (options) {
        console.log(options);
      }
    }
  };
</script>
