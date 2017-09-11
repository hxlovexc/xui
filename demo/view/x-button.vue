<template>
  <div>
    <div class="box">
      <h4>默认</h4>
      <x-button v-for="item in $size" :key="item" :size="item">按钮</x-button>
      <!--颜色分类-->
      <h4>颜色分类</h4>
      <x-button v-for="item in $types" :key="item" :type="item">按钮</x-button>
      <h4>圆角</h4>
      <div>
        <x-button v-for="item in $size" :key="item" :size="item" radius>按钮</x-button>
      </div>
      </br>
      <div>
        <x-button v-for="item in $types" :key="item" :type="item" radius>按钮</x-button>
      </div>
      </br>
      <h4>icon</h4>
      <div>
        <x-button v-for="item in $types" :key="item" icon="x-icon-create" :type="item" radius>图标</x-button>
      </div>
      </br>
      <div>
        <x-button v-for="item in $types" :key="item" icon="x-icon-delete" :type="item" radius></x-button>
      </div>
      </br>
      <h4>hollow</h4>
      <div>
        <x-button v-for="item in $types" hollow :key="item" :type="item" radius>按钮</x-button>
      </div>
      <h4>click</h4>
      <div>
        <x-button @click="click" radius>按钮</x-button>
      </div>
      <h4>禁用</h4>
      <div>
        <x-button v-for="item in $size" disabled :key="item" :size="item">按钮</x-button>
      </div>
      <h4>loading</h4>
      <div>
        <x-button v-for="item in $size" :key="item" @click="loading = true" :loading="loading" :size="item">按钮</x-button>
        <x-button v-for="item in $types" :key="item" @click="loading = true" :loading="loading" :type="item">按钮</x-button>
      </div>
      <h4>blcok</h4>
      <div class="block-btn-box">
        <x-button v-for="item in $size" :key="item" block :size="item">按钮</x-button>
      </div>
    </div>
    <h4>按钮组</h4>
    <div>
      <x-button-group>
        <x-button>按钮01</x-button>
        <x-button disabled>按钮02</x-button>
        <x-button>按钮03</x-button>
      </x-button-group>
      </br>
    </div>
    <div  v-for="item in $types">
      <x-button-group>
        <x-button :type="item">按钮01</x-button>
        <x-button :disabled="item === 'success'" :type="item">按钮02</x-button>
        <x-button :type="item">按钮03</x-button>
      </x-button-group>
      </br>
    </div>
    </br>
    <h4>圆角</h4>
    <x-button-group radius>
      <x-button>按钮01</x-button>
      <x-button>按钮02</x-button>
      <x-button>按钮03</x-button>
    </x-button-group>
    </br>
    <div  v-for="item in $types">
      <x-button-group radius>
        <x-button :type="item">按钮01</x-button>
        <x-button :type="item">按钮02</x-button>
        <x-button :type="item">按钮03</x-button>
      </x-button-group>
      </br>
    </div>
    <h4>icon</h4>
    <x-button-group radius>
      <x-button icon="x-icon-chevron-left"></x-button>
      <x-button icon="x-icon-pause"></x-button>
      <x-button icon="x-icon-chevron-right"></x-button>
    </x-button-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false
      };
    },
    methods: {
      click (e) {
        window.alert('点击了');
      }
    }
  };
</script>

<style lang="scss">
  .box{
    margin-top:20px;
    .x-button{
      margin-left: 10px;
    }

    .block-btn-box{
      width: 250px;

      .x-block{
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
</style>
