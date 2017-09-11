<template>
  <span
    class="x-badge"
    :class="[
      'x-badge-' + type,
      'x-badge-' + size,
      {
        'x-radius': radius
      }
    ]"
  >
    <slot></slot>
  </span>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'primary'
      },
      radius: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

