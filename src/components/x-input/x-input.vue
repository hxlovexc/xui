<template>
  <div
    class="x-input-box"
    :class="[
      `x-input-${size}`,
      type && `x-input-${type}`,
      {
        'x-inline': inline,
        'x-input-group': $slots.left || $slots.right,
        'x-input-group-left-box': $slots.left,
        'x-input-group-right-box': $slots.right,
        'x-input-radius': radius
      }
    ]"
  >
    <div class="x-input-group-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <input
      class="x-input"
      :value="inputValue"
      :maxlength="max"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="input"
      @blur="blur"
      @focus="focus"
    >
    <i
      v-if="icon"
      class="x-text-c"
      :class="icon"
      @click="iconClick"
    ></i>
    <div class="x-input-group-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import inputBox from '../../mixins/x-input-box';

  export default {
    mixins: [inputBox],
    props: {
      inputType: {
        type: String,
        default: 'input'
      },
      icon: {
        type: String
      }
    },
    methods: {
      iconClick () {
        this.$emit('icon-click', this.$el.querySelector('input').value, this.$el);
      }
    }
  };
</script>
