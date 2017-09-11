<template>
  <label
    class="x-radio x-unselect"
    :class="[
      {
        'x-checked': label === model,
        'x-disabled': disabled
      },
      `x-radio-${type}`
    ]"
  >
    <input
      type="radio"
      v-model="model"
      :name="name"
      :value="label"
      :disabled="disabled"
      :checked="checked"
    >
    <i></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
  import xRadio from '../../mixins/x-radio';

  export default {
    name: 'x-radio',
    mixins: [xRadio]
  };
</script>
