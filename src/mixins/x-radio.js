import { parent } from '../utils/query-components';

export default {
  props: {
    value: {},
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {},
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  computed: {
    model: {
      get () {
        return this.PARENT ? this.PARENT.value : this.value;
      },
      set (value) {
        this.PARENT ? this.PARENT.change(value) : this.change(value);
      }
    },
    PARENT () {
      return parent.call(this, 'x-radio-group');
    }
  },
  methods: {
    change (value) {
      this.emit(value);
      this.$emit('change', value);
    },
    emit (value) {
      this.$emit('input', value);
    }
  },
  mounted () {
    if (this.checked) {
      this.PARENT ? this.PARENT.change(this.label, true) : this.emit(this.label);
    }
  }
};
