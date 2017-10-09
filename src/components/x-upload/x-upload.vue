<template>
  <div class="x-upload-box" @click="handleClick">
    <slot></slot>
    <input
      v-show="false"
      :multiple="multiple"
      :accept="accept"
      @change="inputChange"
      type="file"
      ref="input"
    >
  </div>
</template>

<script>
  export default {
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'file'
      },
      accept: {
        type: String
      },
      types: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    methods: {
      handleClick () {
        this.$refs.input.click();
      },
      inputChange ({ target }) {
        const files = Array.prototype.slice.call(target.files);
        if (!files.length) return;
        this.uploadBefore(files);
      },
      uploadBefore (files) {
        files.forEach((item) => {
          console.log(item);
        });
        this.$refs.input.value = null;
      }
    }
  };
</script>

