<template>
  <div
    class="x-counter"
    :class="[
      `x-counter-${size}`,
      type && `x-counter-${type}`,
      {
        'x-disabled': disabled
      }
    ]"
  >
    <div
      class="x-counter-btn x-counter-reduction"
      :class="{
        'x-min-disabled': minDisabled
      }"
      @click.stop="reduction"
    >
      <i class="x-icon-minus"></i>
    </div>
    <input
      type="text"
      class="x-counter-input"
      :value="inputValue"
      :disabled="disabled"
      :maxlength="max"
      @input="input"
    >
    <div
      class="x-counter-btn x-counter-add"
      :class="{
        'x-max-disabled': maxDisabled
      }"
      @click.stop="add"
    >
      <i class="x-icon-plus"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String
      },
      max: Number,
      min: {
        type: Number,
        default: 0
      },
      step: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        inputValue: this.value,
        count: 0,
        // 定时器
        interval: ''
      };
    },
    methods: {
      input (event) {
        let value = event.target.value;
        // 判断是否是input
        if (!this.isNumber(value)) {
          value = this.inputValue;
        }
        event.target.value = value = this.judgeScope(value);
        this.emit(value);
      },
      isNumber (value) {
        return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
      },
      // 递增
      add () {
        if (this.maxDisabled || this.disabled) return;
        let value = this.inputValue;
        value = this.addStep(value, this.step);
        this.inputValue = this.isMax(value);
        this.emit(this.inputValue);
      },
      // 递减
      reduction () {
        if (this.minDisabled || this.disabled) return;
        let value = this.inputValue;
        value = this.addStep(value, -this.step);
        this.inputValue = this.isMin(value);
        this.emit(this.inputValue);
      },
      isMax (value) {
        if (value > this.max) {
          return this.max;
        }
        return value;
      },
      isMin (value) {
        if (value < this.min) {
          return this.min;
        }
        return value;
      },
      judgeScope (value) {
        value = this.isMax(value);
        value = this.isMin(value);
        return value || this.min;
      },
      emit (value) {
        value = Number(value);
        this.$emit('input', value);
        this.$emit('change', value);
      },
      // js浮点数运算
      addStep (value, step) {
        let r1, r2, m;
        try {
          r1 = value.toString().split('.')[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = step.toString().split('.')[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (value * m + step * m) / m;
      }
    },
    computed: {
      minDisabled () {
        return this.inputValue <= this.min;
      },
      maxDisabled () {
        return this.inputValue >= this.max;
      }
    },
    watch: {
      value (value) {
        if (value === this.inputValue) return;
        this.inputValue = this.judgeScope(value);
      }
    }
  };
</script>
