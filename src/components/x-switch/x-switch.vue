<template>
  <div
    class="x-switch"
    :class="[
      'x-switch-' + type,
      'x-switch-' + size,
      {
        'x-switch-open': state,
        'x-disabled': disabled
      }
    ]"
    @click="toggle"
  >
    <i></i>
    <span
      class="x-switch-label x-unselect"
      v-if="(openText || closeText) && size != 'small'"
    >{{label}}</span>
  </div>
</template>

<script>
  export default {
    name: 'x-switch',
    props: {
      value: {
        default: false
      },
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      openText: {
        type: String,
        default: 'ON'
      },
      closeText: {
        type: String,
        default: 'OFF'
      }
    },
    data () {
      return {
        state: this.value
      };
    },
    watch: {
      value (value) {
        if (this.disabled) return;
        this.state = value;
      }
    },
    computed: {
      label () {
        return this.state ? this.openText : this.closeText;
      }
    },
    methods: {
      toggle () {
        if (this.disabled) return;
        this.state = !this.state;
        this.$emit('input', this.state);
        this.$emit('change', this.state, this.$el);
      }
    }
  };
</script>

