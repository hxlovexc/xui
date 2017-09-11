<template>
  <button
    type="button"
    class="x-button"
    :class="[
      'x-button-' + size,
      type && 'x-button-' + type,
      {
        'x-block': block,
        'x-radius': radius,
        'x-loading': loading && !disabled,
        'x-hollow': hollow
      }
    ]"
    :disabled="disabled"
    @click="click"
  >
    <i
      v-if="loading && !disabled"
      :class="loadingIcon"
    ></i>
    <i v-else-if="!loading && icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String
      },
      block: {
        type: Boolean,
        default: false
      },
      radius: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingIcon: {
        type: String,
        default: 'x-icon-load-a'
      },
      hollow: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      }
    },
    methods: {
      click (event) {
        this.$emit('click', event);
      }
    }
  };
</script>

