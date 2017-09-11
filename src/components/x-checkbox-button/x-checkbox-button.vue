<template>
  <label
    class="x-checkbox-button x-unselect"
    :class="{
      'x-checked': state && !disabled,
      'x-disabled': disabled
    }"
  >
    <input
      type="checkbox"
      :name="name"
      :value="label"
      :checked="state"
      :disabled="disabled"
      @change="change"
    >
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  import xCheckbox from '../../mixins/x-checkbox';

  export default {
    name: 'x-checkbox',
    mixins: [xCheckbox]
  };
</script>
