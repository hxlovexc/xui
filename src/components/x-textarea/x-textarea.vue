<template>
  <div
    class="x-textarea-box"
    :class="[
      `x-textarea-${size}`,
      type && `x-textarea-${type}`,
      {
        'x-inline': inline
      }
    ]"
  >
    <textarea
      class="x-textarea"
      validateevent="true"
      type="textarea"
      autocomplete="off"
      :placeholder="placeholder"
      :class="{
        'x-radius': radius
      }"
      :value="inputValue"
      :maxlength="max"
      :disabled="disabled"
      @input="input"
      @blur="blur"
      @focus="focus"
    ></textarea>
  </div>
</template>

<script>
  import inputBox from '../../mixins/x-input-box';

  export default {
    mixins: [inputBox]
  };
</script>
