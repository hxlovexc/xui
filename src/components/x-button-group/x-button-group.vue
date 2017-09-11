<template>
  <div
    class="x-button-group x-clear-float"
    :class="[
      size && `x-button-group-${size}`,
      {
        'x-radius': radius
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'default'
      },
      radius: {
        type: Boolean
      }
    }
  };
</script>

