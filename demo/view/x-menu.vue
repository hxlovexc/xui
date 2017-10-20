<template>
  <div class="menu">
    <div>
      <h4>水平导航</h4>
      <x-menu class="menu" theme="baise" @select="select">
        <x-menu-item name="1">
          <i class="x-icon-alert"></i>
          菜单一
        </x-menu-item>
        <x-menu-item name="2">
          <i class="x-icon-alert"></i>
          菜单二
        </x-menu-item>
        <x-menu-item name="3">
          <i class="x-icon-alert"></i>
          菜单三
        </x-menu-item>
      </x-menu>
      <x-menu class="menu" v-for="(item, index) in $types" :key="index" :theme="item" @select="select">
        <x-menu-item name="1">
          <i class="x-icon-alert"></i>
          啊哈
        </x-menu-item>
        <x-menu-item name="2">
          <i class="x-icon-alert"></i>
          啊哈
        </x-menu-item>
        <x-menu-item name="3">
          <i class="x-icon-alert"></i>
          啊哈
        </x-menu-item>
        <x-menu-item name="4">
          <i class="x-icon-alert"></i>
          啊哈
        </x-menu-item>
        <x-menu-item name="5">
          <i class="x-icon-alert"></i>
          啊哈
        </x-menu-item>
      </x-menu>
    </div>
    </br>
    <div>
      <h4>垂直导航</h4>
      <div class="menu" style="width:200px">
        <x-menu mode="vertical" theme="baise" @select="select">
          <x-menu-item name="1">
            <i class="x-icon-alert"></i>
            菜单一
          </x-menu-item>
          <x-menu-item name="2">
            <i class="x-icon-alert"></i>
            菜单二
          </x-menu-item>
          <x-menu-item name="3">
            <i class="x-icon-alert"></i>
            菜单三
          </x-menu-item>
        </x-menu>
      </div>
      <div style="width:200px">
        <x-menu class="menu" mode="vertical" v-for="(item, index) in $types" :key="index" :theme="item" @select="select">
          <x-menu-item name="1">
            <i class="x-icon-alert"></i>
            啊哈
          </x-menu-item>
          <x-menu-item name="2">
            <i class="x-icon-alert"></i>
            啊哈
          </x-menu-item>
          <x-menu-item name="3">
            <i class="x-icon-alert"></i>
            啊哈
          </x-menu-item>
          <x-menu-item name="4">
            <i class="x-icon-alert"></i>
            啊哈
          </x-menu-item>
          <x-menu-item name="5">
            <i class="x-icon-alert"></i>
            啊哈
          </x-menu-item>
        </x-menu>
      </div>
    </div>
    </br>
    <div>
      <h4>二级菜单</h4>
      <x-menu class="menu" theme="baise">
        <x-submenu>
          <template slot="title">菜单一</template>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
        </x-submenu>
        <x-submenu>
          <template slot="title">菜单二</template>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
        </x-submenu>
        <x-submenu>
          <template slot="title">菜单三</template>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
        </x-submenu>
      </x-menu>
      <x-menu class="menu" v-for="(item, index) in $types" :key="index" :theme="item">
        <x-submenu>
          <template slot="title">菜单一</template>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
        </x-submenu>
        <x-submenu>
          <template slot="title">菜单二</template>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
        </x-submenu>
        <x-submenu>
          <template slot="title">菜单三</template>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
          <x-menu-item>菜单</x-menu-item>
        </x-submenu>
      </x-menu>
      <!-- 垂直展示 -->
      <div style="width:200px">
        <x-menu class="menu" mode="vertical" theme="baise">
          <x-submenu>
            <template slot="title">菜单一</template>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
          </x-submenu>
          <x-submenu>
            <template slot="title">菜单二</template>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
          </x-submenu>
          <x-submenu>
            <template slot="title">菜单三</template>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
          </x-submenu>
        </x-menu>
        <x-menu class="menu" mode="vertical" v-for="(item, index) in $types" :key="index" :theme="item">
          <x-submenu>
            <template slot="title">菜单一</template>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
          </x-submenu>
          <x-submenu>
            <template slot="title">菜单二</template>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
          </x-submenu>
          <x-submenu>
            <template slot="title">菜单三</template>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
            <x-menu-item>菜单</x-menu-item>
          </x-submenu>
        </x-menu>
      </div>
    </div>
    <div style="height:500px"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {
      select (key, path) {
        console.log(key, path);
      }
    }
  };
</script>


<style scoped lang="scss">
  .menu{
    margin-bottom: 10px;
  }
</style>
