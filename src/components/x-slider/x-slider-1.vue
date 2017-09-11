<template>
  <div
    class="x-slider-box"
    :class="[
      'x-slider-' + type,
      {
        'x-disabled': disabled
      }
    ]"
  >
    <div
      v-if="range"
      class="x-slider-handle x-slider-min"
      :style="{
        'left': `${minPosition}px`
      }"
      @mousedown="mousedown($event, 'min')"
    >
      <div class="x-tooltip x-tooltip-top">
        <div class="x-tooltip-text">{{minVal}}</div>
      </div>
    </div>
    <div
      class="x-slider-handle x-slider-max"
      :style="{
        'left': `${maxPosition}px`
      }"
      @mousedown="mousedown($event, 'max')"
    >
      <div class="x-tooltip x-tooltip-top">
        <div class="x-tooltip-text">{{maxVal}}</div>
      </div>
    </div>
    <!--进度条-->
    <div
      class="x-slider-bar"
      :style="{
        'width': `${barWidth}px`,
        'left': `${barLeft}px`
      }"
    ></div>
    <!--进度tip-->
    <div class="x-slider-tip"></div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: [Number, Array]
      },
      type: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: 100
      },
      min: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        sliderValue: this.value,
        // 移动位置
        maxPosition: 0,
        minPosition: 0,
        // 按下的起始位置
        startPosition: 0,
        // 按钮类型
        handleType: '',
        // 进度条宽度
        barWidth: 0,
        // min按下时候进度条宽度
        barDownWidth: 0,
        // 进度条left
        barLeft: 0,
        // 结束时候的位置记录
        endPosition: 0,
        minVal: 0,
        maxVal: 0
      };
    },
    computed: {
      step () {
        return this.$el.getBoundingClientRect().width / (this.max - this.min);
      }
    },
    watch: {
      value (value) {
        if (this.disabled === false && this.sliderValue !== value) {
          this.sliderValue = value;
          this.changeValue();
        }
      }
    },
    methods: {
      mousedown (event, type) {
        if (this.disabled) return false;
        event.preventDefault();
        const left = event.target.getBoundingClientRect().left;
        this.handleType = type;
        // 记录按下的位置
        this.startPosition = left + (event.clientX - left);
        // 如果是min按钮则记录开始位置
        switch (type) {
          case 'min':
            this.barDownWidth = this.barWidth;
            this.endPosition = this.minPosition;
            break;
          case 'max':
            this.endPosition = this.maxPosition;
            break;
        }
        this.bind('mousemove', this.mousemove);
        this.bind('mouseup', this.mouseup);
      },
      mousemove (event) {
        event.preventDefault();
        let left = (event.clientX - this.startPosition) + this.endPosition;
        let value = this.judgeVal(Math.round(left / this.step));
        if (this.handleType === 'min') {
          this.setMinPosition(value);
        } else {
          this.setMaxPosition(value);
        }
        if (value === this.value) return;
        value = this.sliderValue = this.range ? [this.minVal, this.maxVal] : this.maxVal;
        this.$emit('input', value);
        this.$emit('change', value, this.$el);
      },
      mouseup () {
        this.unbind('mousemove', this.mousemove);
        this.unbind('mouseup', this.mouseup);
      },
      bind (type, callback) {
        document.addEventListener(type, callback, false);
      },
      unbind (type, callback) {
        document.removeEventListener(type, callback, false);
      },
      // 判断最小和最大
      judgeVal (value) {
        if (this.range) {
          switch (this.handleType) {
            case 'min':
              const maxVal = this.maxPosition / this.step;
              if (value >= maxVal) {
                value = maxVal;
              }
              if (value <= this.min) {
                value = this.min;
              }
              break;
            case 'max':
              const minVal = this.minPosition / this.step;
              if (value >= this.max) {
                value = this.max;
              }
              if (value <= minVal) {
                value = minVal;
              }
              break;
          }
        } else {
          if (value >= this.max) {
            value = this.max;
          }
          if (value <= this.min) {
            value = this.min;
          }
        }
        return value;
      },
      // 设置大的value
      setMaxPosition (value) {
        const left = value * this.step;
        this.maxVal = value;
        this.barWidth = left - this.minPosition;
        this.maxPosition = left;
      },
      // 设置小的value
      setMinPosition (value) {
        const left = value * this.step;
        this.minVal = value;
        this.barWidth = this.maxPosition - left;
        this.minPosition = this.barLeft = left;
      },
      changeValue () {
        const value = this.sliderValue;
        if (Array.isArray(value)) {
          this.setMinPosition(value[0]);
          this.setMaxPosition(value[1]);
        } else {
          this.setMaxPosition(value);
        }
      }
    },
    mounted () {
      if (!this.sliderValue) return;
      const value = this.sliderValue;
      if (this.range) {
        value[0] = Math.max(this.min, value[0] || 0);
        value[1] = Math.max(this.min, Math.min(value[1], this.max));
      } else {
        this.sliderValue = Math.max(this.min, Math.min(value, this.max));
      }
      this.sliderValue && this.changeValue();
    }
  };
</script>
