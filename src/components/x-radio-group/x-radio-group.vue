
<template>
  <div
    class="x-radio-group"
    :class="[
      size && `x-radio-button-${size}`,
      type && `x-radio-button-${type}`,
      {
        'x-radio-button-radius': radius
      }
    ]"
  >
    <slot></slot>
  </div>  
</template>

<script>
  import porps from '../../mixins/x-checkbox-group_x-radio-group';
  export default {
    name: 'x-radio-group',
    mixins: [porps],
    props: {
      value: {
        type: [String, Number]
      }
    },
    methods: {
      change (value) {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  };
</script>
