<template>
  <li
    class="x-meun-item"
    :class="{
      'x-menu-active': active
    }"
    @click="menuClick"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    props: {
      name: {
        type: [String, Number],
        default: ''
      },
      path: {
        type: String,
        default: ''
      }
    },
    data () {
      return {};
    },
    methods: {
      menuClick () {
        this.$parent.selected(this.name, this.path);
      }
    },
    computed: {
      active () {
        return this.$parent.curActive && this.$parent.curActive === this.name;
      }
    }
  };
</script>
