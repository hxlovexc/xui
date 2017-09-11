<template>
  <div
    class="x-notice-box"
  >
    <x-notice-item
      v-for="(item, index) in noticeList"
      :key="item.name"
      :type="icons[item.type]"
      :options="item"
    ></x-notice-item>
  </div>
</template>

<script>
  import xNoticeItem from './x-notice-item.vue';
  export default {
    data () {
      return {
        noticeList: [],
        icons: {
          success: 'x-icon-checkmark-circle',
          warning: 'x-icon-alert',
          danger: 'x-icon-cancel',
          primary: 'x-icon-information-circled',
          dark: 'x-icon-hangout'
        },
        intervalList: []
      };
    },
    methods: {
      add (options) {
        const length = this.noticeList.length;
        this.$set(this.noticeList, length, options);
      },
      close (name) {
        // name如果不存在则关闭全部
        if (typeof name === 'string' || typeof name === 'number') {
          const list = this.noticeList;
          for (let i = 0; i < list.length; i++) {
            if (list[i].name === name) {
              // 移除
              list.splice(i, 1);
              break;
            }
          }
        } else {
          this.noticeList = [];
        }
      }
    },
    components: {
      xNoticeItem
    }
  };
</script>

