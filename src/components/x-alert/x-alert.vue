<template>
  <transition name="x-alert-animate">
    <div
      v-if="show"
      class="x-alert"
      :class="[
        'x-alert-' + type,
        {
          'x-alert-show-icon': showIcon,
          'x-alert-show-close': closable
        }
      ]"
    >
      <div class="x-alert-content">
        <i
          class="x-alert-icon"
          :class="showIcon && (this.icon || icons[type])"
        ></i>
        <div class="x-alert-title" v-if="title">{{title}}</div>
        <slot></slot>
        <i
          class="x-alert-close x-icon-close-round"
          v-if="closable"
          @click="close"
        ></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      title: {
        type: String,
        default: ''
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      closable: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        icons: {
          success: 'x-icon-checkmark-circle',
          warning: 'x-icon-alert',
          danger: 'x-icon-cancel',
          primary: 'x-icon-information-circled',
          dark: 'x-icon-hangout'
        },
        show: true
      };
    },
    methods: {
      close (event) {
        this.show = false;
        this.$emit('close', event);
      }
    }
  };
</script>
