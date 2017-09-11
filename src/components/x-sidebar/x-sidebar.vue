<template>
  <transition name="x-sidebar-animate">
    <div
      class="x-sidebar"
      v-show="show"
    >
      <div class="x-mask" v-if="mask" @click="maskClick"></div>
      <div
        class="x-sidebar-content"
        :class="[
          'x-sidebar-' + direction
        ]"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import { on, off } from 'utils/dom';

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'left'
      },
      mask: {
        type: Boolean,
        default: true
      },
      escClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        show: this.value
      };
    },
    watch: {
      value (value) {
        if (value !== this.show) {
          this.show = value;
          value && this.bindEvent();
        }
      }
    },
    methods: {
      maskClick () {
        this.show = false;
        this.$emit('input', false);
        this.$emit('close', this.$el);
        off(window, 'keyup', this.escCloseFun);
      },
      escCloseFun ({ keyCode }) {
        keyCode === 27 && this.escClose && this.maskClick();
      },
      bindEvent () {
        this.$emit('open');
        on(window, 'keyup', this.escCloseFun);
      }
    }
  };
</script>
