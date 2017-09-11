<template>
  <div
    class="x-checkbox-group"
    :class="[
      size && `x-checkbox-button-${size}`,
      type && `x-checkbox-button-${type}`,
      {
        'x-checkbox-button-radius': radius
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  import porps from '../../mixins/x-checkbox-group_x-radio-group';
  import { find } from '../../utils/query-components';

  export default {
    name: 'x-checkbox-group',
    mixins: [porps],
    props: {
      value: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        model: []
      };
    },
    methods: {
      change (value) {
        let index = this.model.indexOf(value);
        if (index === -1) {
          this.model.push(value);
        } else {
          this.model.splice(index, 1);
        }
        this.$emit('input', this.model);
        this.$emit('change', this.model);
      },
      updateState (value) {
        this.model = value;
        // 获取当前组件下所有的x-checkbox
        this::find('x-checkbox', (item) => {
          item.state = value.indexOf(item.label) > -1;
        });
      }
    },
    watch: {
      value (value) {
        this.updateState(value);
      }
    },
    mounted () {
      this.updateState(this.value);
    }
  };
</script>
