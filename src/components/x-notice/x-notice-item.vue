<template>
  <transition name="x-notice-left-move">
    <div
      class="x-notice"
      :class="[
        'x-notice-' + options.type,
        {
          'x-notice-show-icon': options.showIcon,
          'x-notice-show-close': options.showClose
        }
      ]"
      @click="noticeClick"
    >
      <div class="x-notice-content">
        <i
          class="x-notice-icon"
          :class="options.showIcon && (options.icon || type)"
        ></i>
        <div class="x-notice-title" v-if="options.title">{{options.title}}</div>
        <div>{{options.message}}</div>
        <i
          class="x-notice-close x-icon-close-round"
          v-if="options.showClose"
          @click.stop="close"
        ></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object
      },
      type: {
        type: String
      }
    },
    data () {
      return {
        timeout: ''
      };
    },
    methods: {
      countdown () {
        this.timeout = setTimeout(() => {
          // 关闭
          this.close();
        }, this.options.timer);
      },
      // 关闭
      close () {
        this.clearTimeout();
        // 移除
        this.$parent.close(this.options.name);
      },
      noticeClick () {
        const clickBack = this.options.clickBack;
        clickBack && clickBack(this);
      },
      clearTimeout () {
        // 组建销毁的时候重复调用
        if (this.timeout) {
          const close = this.options.close;
          close && close();
          clearTimeout(this.timeout);
          this.timeout = '';
        }
      }
    },
    mounted () {
      // 判断是否启用定时器
      if (typeof this.options.timer === 'number' && this.options.timer !== 0) {
        this.countdown();
      }
    },
    beforeDestroy () {
      // 销毁定时器
      this.clearTimeout();
    }
  };
</script>

