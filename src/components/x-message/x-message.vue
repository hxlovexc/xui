<template>
  <div class="x-message">
    <ul class="x-message-list">
      <xMessageItem
        v-for="item in items"
        :key="item.name"
        :icon="item.showIcon ? (item.type && icons[item.type]) : ''"
        :options="item"
      ></xMessageItem>
    </ul>
  </div>
</template>

<script>
  import xMessageItem from './x-message-item.vue';

  export default {
    data () {
      return {
        items: [],
        icons: {
          loading: 'x-icon-load-c',
          success: 'x-icon-checkmark-circle',
          warning: 'x-icon-alert',
          danger: 'x-icon-cancel',
          primary: 'x-icon-information-circled',
          dark: 'x-icon-hangout'
        }
      };
    },
    methods: {
      add (options) {
        this.items.push(options);
      },
      close (name) {
        // name如果不存在则关闭全部
        if (typeof name === 'string' || typeof name === 'number') {
          const list = this.items;
          for (let i = 0; i < list.length; i++) {
            if (list[i].name === name) {
              // 移除
              list.splice(i, 1);
              break;
            }
          }
        } else {
          this.items = [];
        }
      }
    },
    components: {
      xMessageItem
    }
  };
</script>
