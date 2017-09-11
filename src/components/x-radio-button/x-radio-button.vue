<template>
  <label
    class="x-radio-button x-unselect"
    :class="{
      'x-checked': label === model && !disabled,
      'x-disabled': disabled
    }"
  >
    <input
      type="radio"
      v-model="model"
      :name="name"
      :value="label"
      :disabled="disabled"
      :checked="checked"
    >
    <span>
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
