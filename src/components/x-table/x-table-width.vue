<template>
  <colgroup>
    <col v-for="item in list" :key="item.width" :width="item.width || ''">
  </colgroup>
</template>

<script>
  export default {
    props: {
      list: Array
    }
  };
</script>
