<template>
  <label
    class="x-checkbox x-unselect"
    :class="[
      {
        'x-checked': state,
        'x-disabled': disabled
      },
      `x-checkbox-${type}`
    ]"
  >
    <input
      type="checkbox"
      :name="name"
      :value="label"
      :checked="state"
      :disabled="disabled"
      @change="change"
    >
    <i class="x-icon-done"></i>
    <span v-if="$slots.default">
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
