<template>
  <div
    class="x-quote"
    :class="[
      type && `x-quote-${type}`,
      radius && 'x-radius',
      showBg && 'x-show-bg'
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'x-quote',
    props: {
      type: String,
      radius: Boolean,
      showBg: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
