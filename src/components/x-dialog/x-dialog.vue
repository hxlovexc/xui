<template>
  <transition name="bounce">
    <div
      class="x-dialog-box"
      v-show="show"
    >
      <!--遮罩-->
      <div class="x-mask" v-if="mask" @click="maskClick"></div>
      <div
        class="x-dialog"
        :class="{
          'x-radius': radius
        }"
      >
        <!--标题-->
        <div class="x-dialog-title">{{title}}</div>
        <span
          class="x-dialog-close"
          @click.stop="buttonClick('close')"
        >
          <i class="x-icon-close-round"></i>
        </span>
        <!--内容-->
        <div class="x-dialog-content">
          <x-input v-if="dialogType === 'prompt'" v-model="inputValue" :placeholder="inputPlaceholder"></x-input>
          <div v-else :class="[icon && `x-dialog-${type}`, icon && 'x-dialog-show-icon']">
            <i v-if="icon" :class="icon"></i>
            <span>{{message}}</span>
          </div>
        </div>
        <!--按钮内容-->
        <div class="x-dialog-footer x-text-r">
          <x-button
            v-if="showCloseButton"
            size="small"
            @click="buttonClick('close')"
          >{{closeButtonText}}</x-button>
          <x-button
            v-if="confirmButtonText"
            size="small"
            type="primary"
            @click="buttonClick('confirm')"
          >{{confirmButtonText}}</x-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import xButton from '../x-button/x-button.vue';
  import xInput from '../x-input/x-input.vue';
  import { on, off } from 'utils/dom';

  export default {
    components: {
      xButton,
      xInput
    },
    data () {
      return {
        show: '',
        title: '',
        dialogType: 'alert',
        type: '',
        message: '',
        inputValue: '',
        radius: '',
        inputPlaceholder: '',
        showCloseButton: '',
        showConfirmButton: '',
        closeButtonText: '',
        confirmButtonText: '',
        close: '',
        confirm: '',
        maskClose: '',
        promptRequired: '',
        mask: '',
        icon: '',
        escClose: ''
      };
    },
    methods: {
      buttonClick (type) {
        let value = '';
        switch (type) {
          case 'close':
            value = this.dialogType === 'prompt' ? this.inputValue : undefined;
            typeof this.close === 'function' && this.close(value);
            this.hide();
            break;
          case 'confirm':
            if (this.dialogType === 'prompt') {
              value = this.inputValue;
            }
            // 是否必填
            if (this.dialogType === 'prompt' && this.promptRequired && value.replace(/(^\s*)|(\s*$)/g, '') === '') {
              return;
            }
            this.hide();
            typeof this.confirm === 'function' && this.confirm(value);
            break;
        }
      },
      hide () {
        // 移除遮罩
        this.show = false;
      },
      maskClick () {
        if (!this.maskClose) return;
        this.buttonClick('close');
      },
      keyup ({ keyCode }) {
        if (this.show && this.escClose && keyCode === 27) this.buttonClick('close');
      }
    },
    beforeDestroy () {
      off(window, 'keyup', this.keyup);
    },
    mounted () {
      on(window, 'keyup', this.keyup);
    }
  };
</script>
