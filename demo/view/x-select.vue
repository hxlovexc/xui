<template>
  <div class="row">
    <h3>下拉选择</h3>
    <div class="row">
      <h4>默认</h4>
      <p>{{model}}</p>
      <x-select v-model="model">
        <x-option selected :value="1" label="1-选择1">1-选择1</x-option>
        <x-option :value="2" label="1-选择2">1-选择2</x-option>
        <x-option :value="3" label="1-选择3">1-选择3</x-option>
      </x-select>
    </div>
    </br>

    <!--颜色分类-->
    <div class="row">
      <h4>颜色分类</h4>
      <x-select
        class="select"
        v-for="item in $types"
        :key="item"
        :type="item"
        v-model="value1"
      >
        <x-option value="4" label="2-选择1">2-选择1</x-option>
        <x-option value="5" label="2-选择2">2-选择2</x-option>
        <x-option value="6" label="2-选择3">2-选择3</x-option>
      </x-select>
    </div>
    </br>

    <h3>选择多个</h3>
    <div class="row">
      <h4>默认</h4>
      <p>{{value2}}</p>
      <x-select multiple v-model="value2">
        <x-option selected :value="1" label="1-选择1">1-选择1</x-option>
        <x-option selected :value="2" label="1-选择2">1-选择2</x-option>
        <x-option :value="3" label="1-选择3">1-选择3</x-option>
      </x-select>
    </div>
    </br>

    <!--颜色分类-->
    <div class="row">
      <h4>圆角</h4>
      <x-select
        class="select"
        radius
        v-model="value1"
      >
        <x-option value="4" label="2-选择1">2-选择1</x-option>
        <x-option value="5" label="2-选择2">2-选择2</x-option>
        <x-option value="6" label="2-选择3">2-选择3</x-option>
      </x-select>
      <x-select
        class="select"
        v-for="item in $types"
        radius
        :key="item"
        :type="item"
        v-model="value1"
      >
        <x-option value="4" label="2-选择1">2-选择1</x-option>
        <x-option value="5" label="2-选择2">2-选择2</x-option>
        <x-option value="6" label="2-选择3">2-选择3</x-option>
      </x-select>
    </div>
    </br>

    <!--分组-->
    <div class="row">
      <h3>分组</h3>
      <div class="row">
        <x-select  v-model="value1">
          <x-select-group label="分组1">
            <x-option value="1" label="1-选择1">1-选择1</x-option>
            <x-option value="2" label="1-选择2">1-选择2</x-option>
            <x-option value="3" label="1-选择3">1-选择3</x-option>
          </x-select-group>
          <x-select-group label="分组2">
            <x-option value="4" label="2-选择1">2-选择1</x-option>
            <x-option value="5" label="2-选择2">2-选择2</x-option>
            <x-option value="6" label="2-选择3">2-选择3</x-option>
          </x-select-group>
        </x-select>
      </div>
    </div>
    </br>

    <!--带搜索框的-->
    <div class="row">
      <h4>带搜索框的</h4>
      <x-select
        class="select"
        filter
        v-model="value1"
      >
        <x-option value="1" label="橘子"></x-option>
        <x-option value="2" label="桃子"></x-option>
        <x-option value="6" label="是么"></x-option>
        <x-option value="7" label="好的"></x-option>
        <x-option value="3" label="李子"></x-option>
        <x-option value="4" label="栗子"></x-option>
        <x-option value="5" label="啊哈"></x-option>
      </x-select>
      <x-select
        class="select"
        v-for="item in $types"
        filter
        :key="item"
        :type="item"
        v-model="value1"
      >
        <x-option value="4" label="2-选择1"></x-option>
        <x-option value="5" label="2-选择2"></x-option>
        <x-option value="6" label="2-选择3"></x-option>
      </x-select>
    </div>
    </br>

    <!--带搜索框的-->
    <div class="row">
      <h4>远程搜索</h4>
      <x-select
        class="select"
        filter
        remote
        v-model="value1"
        :loading="loading"
        :remote-method="remoteMethod"
      >
        <x-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></x-option>
      </x-select>
    </div>
    </br>

    <div class="row">
      <!--禁用-->
      <h4>禁用</h4>
      <x-select v-model="value1" class="select" disabled>
        <x-option value="4" label="2-选择1">2-选择1</x-option>
        <x-option value="5" label="2-选择2">2-选择2</x-option>
        <x-option value="6" label="2-选择3">2-选择3</x-option>
      </x-select>
      <x-select class="select" v-model="value1">
        <x-option value="4" label="2-选择1">我是禁用的</x-option>
        <x-option value="5" disabled label="2-选择2">2-选择2</x-option>
        <x-option value="6" label="2-选择3">2-选择3</x-option>
      </x-select>
    </div>

    <!--分组-->
    <div class="row">
      <h4>事件(show-change)</h4>
      <div class="row">
        <x-select v-model="value1" @show-change="showChange">
          <x-option value="1" label="1-选择1">1-选择1</x-option>
          <x-option value="2" label="1-选择2">1-选择2</x-option>
          <x-option value="3" label="1-选择3">1-选择3</x-option>
        </x-select>
      </div>
      <div class="row">
        <h4>事件(change)</h4>
        <x-select v-model="value.a" @change="change">
          <x-option value="1" label="1-选择1">1-选择1</x-option>
          <x-option value="2" label="1-选择2">1-选择2</x-option>
          <x-option value="3" label="1-选择3">1-选择3</x-option>
        </x-select>
      </div>
    </div>
    </br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        model: '',
        options: [],
        value1: '',
        value2: [],
        value: {}
      };
    },
    methods: {
      showChange (state, el) {
        console.log(state, el);
      },
      change (value, el) {
        console.log(`当前选中的value是 => ${value}`, el);
      },
      remoteMethod (str) {
        if (str) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = [{
              label: '湖南',
              value: 1
            }, {
              label: '广东',
              value: 2
            }, {
              label: '广西',
              value: 3
            }, {
              label: '上海',
              value: 4
            }, {
              label: '北京',
              value: 5
            }, {
              label: '湖北',
              value: 6
            }];
          }, 2000);
        }
      }
    }
  };
</script>

<style>
  .select{
    margin: 5px;
  }

  .scroll{
    width: 250px;
    height: 300px;
  }
</style>
