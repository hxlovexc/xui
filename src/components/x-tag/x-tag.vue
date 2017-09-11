<template>
  <div
    class="x-tag"
    :class="[
      'x-tag-' + type,
      'x-tag-' + size,
      {
        'x-radius': radius,
        'x-hollow': hollow
      }
    ]"
  >
    <span class="x-tag-content">
      <slot></slot>
    </span>
    <span class="x-tag-icon" v-if="closable" @click="closeTag">
      <i class="x-icon-close-round"></i>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'default'
      },
      radius: {
        type: Boolean,
        default: true
      },
      hollow: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeTag (event) {
        this.$emit('close', event);
      }
    }
  };
</script>

