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
    label: {
      type: [String, Number]
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      model: '',
      state: this.value,
      PARENT: this::parent('x-checkbox-group')
    };
  },
  methods: {
    change ({ target }) {
      this.changeVal(target.checked);
      this.$nextTick(() => {
        this.$emit('change', this.state);
        this.$emit('input', this.state);
      });
    },
    changeVal (checked) {
      if (this.PARENT) {
        this.PARENT.change(this.label);
      } else {
        this.updateState(checked);
      }
    },
    // 更新状态
    updateState (val) {
      this.state = val ? this.label || true : false;
    }
  },
  watch: {
    value (value) {
      if (value === this.state) return;
      this.changeVal(this.label ? value === this.label : value);
    }
  },
  created () {
    this.checked && this.changeVal(true);
  }
};
