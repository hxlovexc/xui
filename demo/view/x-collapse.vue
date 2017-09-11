<template>
  <div class="row">
    <h4>折叠面板</h4>
    <div class="row">
      <h4>折叠面板-默认</h4>
      <x-collapse>
        <x-collapse-item name="1">
          <template slot="header">选项一</template>
          这个是选项一的内容
        </x-collapse-item>
        <x-collapse-item name="2">
          <template slot="header">选项二</template>
          这个是选项二的内容
        </x-collapse-item>
        <x-collapse-item name="3">
          <template slot="header">选项三</template>
          这个是选项三的内容
        </x-collapse-item>
      </x-collapse>
    </div>
    </br>

    <div class="row">
      <h4>折叠面板-开启手风琴</h4>
      <x-collapse accordion>
        <x-collapse-item name="1">
          <template slot="header">选项一</template>
          这个是选项一的内容
        </x-collapse-item>
        <x-collapse-item name="2">
          <template slot="header">选项二</template>
          这个是选项二的内容
        </x-collapse-item>
        <x-collapse-item name="3">
          <template slot="header">选项三</template>
          这个是选项三的内容
        </x-collapse-item>
      </x-collapse>
    </div>
    </br>

    <div class="row">
      <h4>动态改变 <x-button size="mini" @click="collapse = '2'">显示第二个</x-button></h4>
      <x-collapse v-model="collapse" accordion>
        <x-collapse-item name="1">
          <template slot="header">选项一</template>
          这个是选项一的内容
        </x-collapse-item>
        <x-collapse-item name="2">
          <template slot="header">选项二</template>
          这个是选项二的内容
        </x-collapse-item>
        <x-collapse-item name="3">
          <template slot="header">选项三</template>
          这个是选项三的内容
        </x-collapse-item>
      </x-collapse>
    </div>
    </br>

    <div class="row">
      <h4>折叠面板-圆角</h4>
      <x-collapse radius>
        <x-collapse-item name="1">
          <template slot="header">选项一</template>
          这个是选项一的内容
        </x-collapse-item>
        <x-collapse-item name="2">
          <template slot="header">选项二</template>
          这个是选项二的内容
        </x-collapse-item>
        <x-collapse-item name="3">
          <template slot="header">选项三</template>
          这个是选项三的内容
        </x-collapse-item>
      </x-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: ''
    };
  }
};
</script>
