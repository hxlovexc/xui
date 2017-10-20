<template>
  <div
    class="x-menu"
    :class="[
      'x-menu-' + theme,
      'x-menu-' + mode
    ]"
  >
    <ul
      class="x-menu-list"
      :class="{
        'x-clear-float': mode === 'level'
      }"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'x-menu',
    props: {
      theme: {
        type: String,
        default: 'primary'
      },
      active: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: 'level'
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
