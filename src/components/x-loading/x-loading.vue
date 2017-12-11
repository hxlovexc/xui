<template>
  <transition name="fade">
    <div v-show="show" class="x-loading-mask">
      <div :class="['x-loading', `x-loading-${type}`]">
        <div v-if="icon" class="x-loading-custom-icon">
          <i :class="icon"></i>
        </div>
        <div v-else class="x-loading-icon"></div>
        <p v-if="text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'scale'
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss">
  .x-loading-box {
    position: relative;

    .x-loading-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(255, 255, 255, 0.9);
      text-align: center;
      z-index: 999999;

      .x-loading {
        p {
          display: block;
          padding-top: 7px;
          font-size: 14px;
          line-height: 1;
        }
      }

      .x-loading-icon {
        width: 35px;
        height: 35px;
        margin: 0 auto;
      }

      .x-loading-custom-icon {
        line-height: 1;
      }

      // 默认
      .x-loading-scale {
        .x-loading-icon {
          border-radius: 100%;
          background-color: #a3afb7;
          animation: loading-scale 1s infinite ease-in-out;
        }
      }

      // 圆圈
      .x-loading-circle {
        .x-loading-icon {
          border-radius: 50%;
          box-sizing: border-box;
          border-top: 3px solid rgba(163, 175, 183, 0.4);
          border-right: 3px solid rgba(163, 175, 183, 0.4);
          border-bottom: 3px solid rgba(163, 175, 183, 0.4);
          border-left: 3px solid #4399ff;
          animation: loading-circle 1s infinite linear;
        }
      }

      &::after {
        content: '';
        height: 100%;
      }

      &::after,
      .x-loading {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  // 显示隐藏动画
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s !important;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  // 默认loading
  @keyframes loading-scale {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0)
    }

    100% {
      opacity:0;
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }

  // 圆圈loading动画
  @keyframes loading-circle {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0)
    }
    
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }
</style>
