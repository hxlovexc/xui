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
    <slider-button
      v-if="range"
      v-model="minVal"
      type="min"
      :position="minPosition"
      @mousedown="buttonMousedown"
    ></slider-button>
    <slider-button
      v-model="maxVal"
      type="max"
      :position="maxPosition"
      @mousedown="buttonMousedown"
    ></slider-button>
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
  import { on, off } from 'utils/dom';
  import sliderButton from './slider-button.vue';
  
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
        handleType: '',
        minPosition: 0,
        minVal: this.min,
        maxPosition: 0,
        maxVal: 0,
        barWidth: 0,
        barLeft: 0
      };
    },
    computed: {
      stepLength () {
        return this.$el.getBoundingClientRect().width / (this.max - this.min);
      }
    },
    methods: {
      buttonMousedown (event, type) {
        if (this.disabled) return false;
        event.preventDefault();
        this.handleType = type;
        this.startPosition = event.clientX;
        switch (type) {
          case 'min':
            this.endPosition = this.minPosition;
            break;
          case 'max':
            this.endPosition = this.maxPosition;
            break;
        }
        on(document, 'mousemove', this.mousemove);
        on(document, 'mouseup', this.mouseup);
      },
      mousemove (event) {
        event.preventDefault();
        let left = this.endPosition + (event.clientX - this.startPosition), position = 0, value = 0;
        const isMax = this.handleType === 'min';
        value = Math.round(left / this.stepLength);
        // 范围限制
        value = this.judgeVal(value);
        position = value * this.stepLength;
        // 阻止多次触发
        if (position === (isMax ? this.minPosition : this.maxPosition)) return;
        value = value + this.min;
        isMax ? this.setMinPosition(value, position) : this.setMaxPosition(value, position);
        value = this.range ? [this.minVal, this.maxVal] : this.maxVal;
        this.$emit('input', value);
        this.$emit('change', value, this.$el);
      },
      mouseup () {
        off(document, 'mousemove', this.mousemove);
        off(document, 'mouseup', this.mouseup);
      },
      setMinPosition (value, position) {
        this.barWidth = this.maxPosition - position;
        this.minPosition = this.barLeft = position;
        this.minVal = value;
      },
      setMaxPosition (value, position) {
        this.barWidth = position - this.minPosition;
        this.maxPosition = position;
        this.maxVal = value;
      },
      judgeVal (value, handleType) {
        let newValue = value + this.min;
        if (this.range) {
          handleType = handleType || this.handleType;
          switch (handleType) {
            case 'min':
              if (newValue > this.maxVal) {
                value = this.maxVal - this.min;
              } else if (newValue < this.min) {
                value = 0;
              }
              break;
            case 'max':
              if (newValue < this.minVal) {
                value = this.minVal - this.min;
              } else if (newValue > this.max) {
                value = this.max - this.min;
              }
              break;
          }
          return value;
        }
        if (newValue > this.max) {
          value = this.max - this.min;
        } else if (newValue < this.min) {
          value = 0;
        }
        return value;
      },
      changeValue () {
        const value = this.sliderValue;
        if (Array.isArray(value)) {
          this.setMaxPosition(value[1], this.judgeVal(value[1] - this.min, 'max') * this.stepLength);
          this.setMinPosition(value[0], this.judgeVal(value[0] - this.min, 'min') * this.stepLength);
        } else {
          this.setMaxPosition(value, this.judgeVal(value - this.min, 'min') * this.stepLength);
        }
      }
    },
    watch: {
      value (value) {
        if (this.disabled || value === this.sliderValue) return;
        this.sliderValue = value;
        this.changeValue();
      }
    },
    components: {
      sliderButton
    },
    mounted () {
      if (!this.sliderValue) return;
      let value = this.sliderValue;
      if (this.range) {
        value[0] = Math.max(this.min, value[0]);
        value[1] = Math.max(this.min, Math.min(this.max, value[1]));
      } else {
        this.sliderValue = Math.max(this.min, Math.min(this.max, value));
      }
      this.sliderValue && this.changeValue();
    }
  };
</script>
