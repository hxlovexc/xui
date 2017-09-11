<template>
  <div
    class="x-slider-handle x-slider-min"
    :style="{
      'left': `${position}px`
    }"
    @mousedown="mousedown"
  >
    <div class="x-tooltip x-tooltip-top">
      <div class="x-tooltip-text">{{value}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      position: Number,
      value: Number,
      type: String
    },
    methods: {
      mousedown ($event) {
        this.$emit('mousedown', $event, this.type);
      }
    }
  };
</script>
