<template>
  <div class="x-select-group">
    <span class="x-group-label">{{label}}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String
      }
    }
  };
</script>
