<template>
  <div class="x-scroll-bar">
    <div
      class="x-scroll-bar-content"
      ref="scroll-content"
      @scroll="scroll"
    >
      <div
        class="content"
        ref="content-box"
      >
        <slot></slot>
      </div>
    </div>
    <!--滚动条-->
    <div class="x-bar-box" @mousedown="barBoxMousedown">
      <div
        class="x-bar"
        :class="{
          'x-bar-hover': isHover
        }"
        :style="{
          height: `${barHeight}px`,
          transform: `translateY(${barTop}px)`
        }"
        @mousedown="barMousedown"
      ></div>
    </div>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        barHeight: 0,
        barTop: 0,
        startY: 0,
        endY: 0,
        isHover: false,
        // 容器高度
        boxHeight: 0,
        // 滚动容器高度
        contentHeight: 0
      };
    },
    methods: {
      // 计算bar高度
      calculate () {
        this.boxHeight = this.$el.offsetHeight;
        this.contentHeight = this.$refs['content-box'].offsetHeight;
        this.barHeight = this.boxHeight / (this.contentHeight / this.boxHeight);
      },
      // 滚动
      scroll (event) {
        if (this.isHover) return;
        this.endY = this.barTop = event.target.scrollTop / (this.contentHeight / this.boxHeight);
        this.$emit('scroll', this.barTop);
      },
      // bar鼠标按下
      barMousedown (event) {
        event.stopImmediatePropagation();
        this.isHover = true;
        this.startY = event.clientY - event.target.offsetTop;
        // 禁止选择
        document.onselectstart = () => false;
        document.onmouseup = this.mouseup;
        document.onmousemove = this.docmousemove;
      },
      // 滚动条容器鼠标按下
      barBoxMousedown (event) {
        this.barTop = event.clientY - event.target.getBoundingClientRect().top - (this.barHeight / 2);
        this.setTop();
      },
      // 鼠标移动
      docmousemove (event) {
        this.barTop = this.endY + (event.clientY - this.startY);
        this.setTop();
      },
      setTop () {
        const maxTop = this.boxHeight - this.barHeight;
        // 限制
        if (this.barTop >= maxTop) {
          this.barTop = maxTop;
        } else if (this.barTop <= 0) {
          this.barTop = 0;
        }
        this.$refs['scroll-content'].scrollTop = this.barTop * (this.contentHeight / this.boxHeight);
        this.$emit('scroll', this.barTop);
      },
      // 鼠标抬起
      mouseup () {
        this.endY = this.barTop;
        this.startY = this.isHover = document.onmouseup = document.onselectstart = document.onmousemove = null;
      }
    },
    mounted () {
      this.$nextTick(this.calculate);
    }
  };
</script>
