<template>
  <transition name="bounce">
    <div
      class="x-modal-box"
      v-show="isShow"
    >
      <div v-if="mask" class="x-mask" @click="clickClose"></div>
      <div
        class="x-modal"
        :class="[
          {
            'x-radius': radius
          },
          'x-modal-' + size
        ]"
      >
        <!--标题-->
        <slot name="title">
          <div class="x-modal-title">{{title}}</div>
        </slot>
        <span
          class="x-modal-close"
          v-if="showClose"
          @click="clickClose"
        >
          <i class="x-icon-close-round"></i>
        </span>
        <!--内容-->
        <div class="x-modal-content">
          <slot></slot>
        </div>
        <!--按钮内容-->
        <div
          class="x-modal-footer x-text-r"
          v-if="$slots.footer"
        >
          <slot name="footer"></slot>
        </div>
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
      title: {
        type: String,
        default: ''
      },
      radius: {
        type: Boolean,
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'default'
      },
      mask: {
        type: Boolean,
        default: true
      },
      close: Function,
      escClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isShow: this.value
      };
    },
    watch: {
      value (value) {
        if (value !== this.isShow) {
          value ? this.bindEvent() : this.hide();
          this.isShow = value;
        }
      }
    },
    methods: {
      hide () {
        this.$emit('input', false);
        this.$emit('close');
        off(window, 'keyup', this.escCloseFun);
      },
      escCloseFun ({ keyCode }) {
        keyCode === 27 && this.escClose && this.hide();
      },
      bindEvent () {
        this.$emit('open');
        on(window, 'keyup', this.escCloseFun);
      },
      clickClose () {
        this.close ? this.close(this.hide) : this.hide();
      }
    },
    mounted () {
      this.value && this.bindEvent();
    }
  };
</script>

