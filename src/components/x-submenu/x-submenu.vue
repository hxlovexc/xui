<template>
  <li
    class="x-submenu"
    :class="{
      'x-show-submenu': show
    }"
    @mouseenter="mouseShow"
    @mouseleave="mouseHide"
  >
    <div class="x-meun-item x-menu-item-title" @click="clickShow">
      <span class="x-submenu-title">
        <slot name="title"></slot>
      </span>
      <span class="x-subment-icon">
        <i class="x-icon-chevron-down"></i>
      </span>
    </div>
    <!-- 横向展示 -->
    <transition name="fade" v-if="isLevel">
      <div class="x-submenu-box" v-show="show">
        <ul>
          <slot></slot>
        </ul>
      </div>
    </transition>
    <!-- 垂直展示 -->
    <div v-else class="x-submenu-box" v-show="show">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<script>
  import { parent } from '../../utils/query-components';

  export default {
    data () {
      return {
        show: false,
        parent: parent.call(this, 'x-menu')
      };
    },
    computed: {
      isLevel () {
        return this.parent.mode === 'level';
      }
    },
    methods: {
      mouseShow () {
        if (!this.isLevel) return;
        this.showMenu();
      },
      mouseHide () {
        if (!this.isLevel) return;
        this.hideMenu();
      },
      clickShow () {
        if (this.isLevel) return;
        // 判断是否已经显示
        this.show ? this.hideMenu() : this.showMenu();
      },
      showMenu () {
        this.show = true;
      },
      hideMenu () {
        this.show = false;
      }
    }
  };
</script>

