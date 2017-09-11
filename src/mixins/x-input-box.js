export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    max: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value
    };
  },
  methods: {
    input ({ target }) {
      this.$emit('input', target.value);
      this.$emit('change', target.value, target);
    },
    blur ({ target }) {
      this.$emit('blur', target.value, target);
    },
    focus ({ target }) {
      this.$emit('focus', target.value, target);
    }
  },
  watch: {
    value (value) {
      if (value === this.inputValue || this.disabled) return;
      this.inputValue = value;
    }
  }
};
