<template>
  <li
    v-show="show"
   :class="{
     'x-disabled': disabled,
     'x-select-selected': isSelected,
     'x-select-option-hover': PARENT.hoverIndex === index
   }"
    @mouseenter="optionHover"
    @click="optionClick"
  >
    <span>
      <slot>{{label}}</slot>
    </span>
    <i v-if="isSelected" class="x-icon-done"></i>
  </li>
</template>

<script>
  import { parent } from '../../utils/query-components';

  export default {
    name: 'x-option',
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      label: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        PARENT: parent.call(this, 'x-select'),
        index: 0,
        show: true
      };
    },
    methods: {
      optionClick () {
        if (this.disabled) return;
        this.PARENT.optionsChange(this.index, true);
      },
      optionHover () {
        this.disabled === false && (this.PARENT.hoverIndex = this.index);
      }
    },
    computed: {
      isSelected () {
        let PARENT = this.PARENT;
        if (PARENT.multiple) {
          return PARENT.value.indexOf(this.value) > -1;
        }
        return PARENT.value === this.value;
      }
    },
    created () {
      let options = this.PARENT.options;
      options.push(this);
      this.index = options.indexOf(this);
      this.PARENT.filterOptionsLength++;
      // 默认选中
      this.selected && this.PARENT.optionsChange(this.index);
    }
  };
</script>
