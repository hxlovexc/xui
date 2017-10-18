<template>
  <transition name="x-message-transitioning">
    <li :class="options.type && `x-message-${options.type}`">
      <div class="x-message-item">
        <span class="x-message-icon" v-if="icon">
          <i :class="icon"></i>
        </span>
        <p class="x-message-content">{{options.message}}</p>
      </div>
    </li>
  </transition>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String
      },
      options: {
        type: Object
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
          this.close();
        }, this.options.timer);
      },
      // 关闭
      close () {
        this.clearTimeout();
        // 移除
        this.$parent.close(this.options.name);
      },
      clearTimeout () {
        // 组建销毁的时候重复调用
        if (this.timeout) {
          const close = this.options.close;
          // 执行关闭回调
          close && close();
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
    },
    mounted () {
      // 判断是否自动关闭
      const timer = this.options.timer;
      if (timer && typeof timer === 'number' && this.options.type !== 'loading') {
        this.countdown();
      }
    },
    beforeDestroy () {
      // 销毁定时器
      this.clearTimeout();
    }
  };
</script>
