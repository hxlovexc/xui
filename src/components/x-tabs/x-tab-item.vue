<template>
  <!--内容容器-->
  <div v-show="active">
    <slot name="default"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      name: {
        type: [String, Number],
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        curKey: ''
      };
    },
    computed: {
      active () {
        return this.$parent.active === this.curKey;
      }
    },
    mounted () {
      let PARENT = this.$parent;
      let contents = PARENT.contents;
      contents.push(this);
      this.curKey = this.name || contents.indexOf(this);
      // 默认选中
      this.checked && (PARENT.active = this.curKey);
    }
  };
</script>
