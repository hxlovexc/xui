<template>
  <div
    class="x-form"
    :class="[
      pane === false && labelPosition && 'x-form-label-' + labelPosition,
      {
        'x-form-pane': pane
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      labelPosition: {
        type: String,
        default: ''
      },
      labelWidth: {
        type: String,
        default: ''
      },
      pane: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
