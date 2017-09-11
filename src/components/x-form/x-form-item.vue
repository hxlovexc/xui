<template>
  <div
    class="x-form-item"
    :class="{
      'x-form-item-pane': $slots.label || label,
      'x-textarea-pane': isTextarea
    }"
  >
    <label
      :style="[labelW ? {width: labelW} : '']"
      class="x-form-label" v-if="$slots.label || label">
      <slot name="label">{{label}}</slot>
    </label>
    <div
      class="x-form-content"
      :style="[labelW ? {marginLeft: labelW} : '']"
    >
      <slot></slot>
    </div>
    <!--提示-->
    <p class="x-form-msg" v-if="placeholder">{{placeholder}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      labelWidth: {
        type: String,
        default: ''
      },
      isTextarea: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      labelW () {
        if (this.FORM.labelPosition === 'top' || this.isTextarea) return '';
        return this.labelWidth || this.FORM.labelWidth;
      },
      FORM () {
        return this.$parent;
      }
    }
  };
</script>
