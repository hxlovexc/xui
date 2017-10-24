<template>
  <li
    class="x-meun-item"
    :class="[
      active && (isSub ? 'x-submenu-active' : 'x-menu-active')
    ]"
    @click="menuClick"
  >
    <div class="x-menu-item-title">
      <slot></slot>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      name: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {};
    },
    methods: {
      menuClick () {
        if (this.isSub) {
          this.parent.selected(this.name);
          this.$parent.selected(this.name);
        } else {
          this.parent.selected(this.name);
        }
      }
    },
    computed: {
      active () {
        return this.$parent.curActive === this.name;
      },
      isSub () {
        return this.$parent.$options.name === 'x-submenu';
      },
      parent () {
        return this.isSub ? this.$parent.$parent : this.$parent;
      }
    }
  };
</script>
