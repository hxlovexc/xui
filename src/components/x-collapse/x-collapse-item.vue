<template>
  <div
    class="x-collapse-item"
    :class="{
      'x-collapse-active': active
    }"
  >
    <div class="x-collapse-header" @click="itemClick">
      <i class="x-icon-arrow-forward"></i>
      <div class="x-collapse-title">
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <!--内容容器-->
    <div class="x-collapse-content" v-show="active">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: [String, Number],
        default: ''
      },
      name: {
        type: [String, Number],
        default () {
          return this._uid;
        }
      }
    },
    methods: {
      itemClick () {
        this.$parent.itemClick(this.name || this.index);
      }
    },
    computed: {
      active () {
        return this.$parent.activeItem.indexOf(this.name) > -1;
      }
    }
  };
</script>
