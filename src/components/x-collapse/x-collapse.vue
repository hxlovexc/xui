<template>
  <div
    class="x-collapse"
    :class="{
      'x-radius': radius
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Array],
        default: ''
      },
      radius: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        activeItem: this.value ? [].concat(this.value) : []
      };
    },
    methods: {
      change (activeItem) {
        this.activeItem = activeItem;
        const value = this.accordion ? activeItem[0] : activeItem;
        this.$emit('input', value);
        this.$emit('change', value, this.$el);
      },
      itemClick (name) {
        if (this.accordion) {
          this.change(
            this.activeItem[0] && this.activeItem[0] === name ? '' : [name]
          );
        } else {
          let activeItem = this.activeItem.splice(0);
          const index = activeItem.indexOf(name);
          if (index > -1) {
            activeItem.splice(index, 1);
          } else {
            activeItem.push(name);
          }
          this.change(activeItem);
        }
      }
    },
    watch: {
      value (value) {
        if (Array.isArray(value) && this.accordion) {
          this.activeItem = value[0];
          return;
        }
        this.activeItem = [].concat(value);
      }
    }
  };
</script>
