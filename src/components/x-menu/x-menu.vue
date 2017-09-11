<template>
  <div
    class="x-menu x-clear-float"
    :class="[
      'x-menu-' + type
    ]"
  >
    <div class="x-menu-logo" v-if="$slots.logo">
      <slot name="logo"></slot>
    </div>
    <ul class="x-menu-list ">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      active: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        curActive: ''
      };
    },
    methods: {
      selected (key, path) {
        this.curActive = key;
        this.$emit('select', key, path);
      }
    }
  };
</script>

