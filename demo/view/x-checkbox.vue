<template>
  <div class="box">
   <h3>默认</h3>
    <x-checkbox>单个默认</x-checkbox>
    <x-checkbox v-model="isChecked" checked>
      当前状态: {{isChecked}}
    </x-checkbox>
    <x-checkbox disabled>
      禁用
    </x-checkbox>
    <x-checkbox disabled checked>
      选中禁用
    </x-checkbox>
    </br>

    <h3>颜色分类</h3>
    <!--颜色分类-->
    <div class="row" v-for="item in $types">
      <x-checkbox :type="item">
        {{item}}
      </x-checkbox>
      <x-checkbox :type="item" checked>
        {{item}}
      </x-checkbox>
      </br>
    </div>
    </br>

    <h3>组合</h3>
    <div class="row">
      <h5>你喜欢的水果</h5>
      <p>{{state}}</p>
      <x-checkbox-group v-model="state">
        <x-checkbox :label="1">苹果</x-checkbox>
        <x-checkbox :label="2">西瓜</x-checkbox>
        <x-checkbox :label="3">橙子</x-checkbox>
        <x-checkbox :label="4">菠萝</x-checkbox>
      </x-checkbox-group>
      </br>
      <x-button @click="state = [3, 4]">修改我喜欢的</x-button>
    </div>

    <h3>组合</h3>
    <div class="row">
      <h5>你喜欢的水果</h5>
      <p>{{state2}}</p>
      <x-checkbox-group v-model="state2">
        <x-checkbox :disabled="disabled" :label="1">苹果</x-checkbox>
        <x-checkbox :disabled="disabled" :label="2">西瓜</x-checkbox>
        <x-checkbox :disabled="disabled" :label="3">橙子</x-checkbox>
        <x-checkbox :disabled="disabled" :label="4">菠萝</x-checkbox>
      </x-checkbox-group>
      </br>
      <x-button @click="disabled = !disabled">{{disabled ? '解除禁用' : '禁用'}}</x-button>
    </div>

    <h3>按钮样式-默认</h3>
    <!--组-->
    <div class="row">
      <div class="row" v-for="item in $types">
        <x-checkbox-group button v-model="hobby" :type="item">
          <x-checkbox-button :label="1">上网</x-checkbox-button>
          <x-checkbox-button :label="2">看电影</x-checkbox-button>
          <x-checkbox-button :label="3">玩游戏</x-checkbox-button>
          <x-checkbox-button :label="4">跑步</x-checkbox-button>
        </x-checkbox-group>
        </br>
      </div>
    </div>

    <h3>按钮样式-圆角</h3>
    <!--圆角-->
    <div class="row">
      <div class="row" v-for="item in $types">
        <x-checkbox-group button v-model="hobby" :type="item" radius>
          <x-checkbox-button :label="1">上网</x-checkbox-button>
          <x-checkbox-button :label="2">看电影</x-checkbox-button>
          <x-checkbox-button :label="3">玩游戏</x-checkbox-button>
          <x-checkbox-button :label="4">跑步</x-checkbox-button>
        </x-checkbox-group>
        </br>
      </div>
    </div>
    </br>

    <!--大小分类-->
    <div class="row">
      <h3>大小分类</h3>
      <div class="row" v-for="item in $size">
        <x-checkbox-group button v-model="hobby" :size="item">
          <x-checkbox-button :label="1">上网</x-checkbox-button>
          <x-checkbox-button :label="2">看电影</x-checkbox-button>
          <x-checkbox-button :label="3">玩游戏</x-checkbox-button>
          <x-checkbox-button :label="4">跑步</x-checkbox-button>
        </x-checkbox-group>
        </br>
      </div>
    </div>

    <h3>按钮样式-禁用</h3>
    <!--禁用-->
    <div class="row">
      <div class="row" v-for="item in $size">
        <x-checkbox-group button v-model="hobby" :size="item">
          <x-checkbox-button disabled :label="1">上网</x-checkbox-button>
          <x-checkbox-button :label="2">看电影</x-checkbox-button>
          <x-checkbox-button :label="3">玩游戏</x-checkbox-button>
          <x-checkbox-button :label="4">跑步</x-checkbox-button>
        </x-checkbox-group>
        </br>
      </div>
    </div>
    </br>
    <div class="row">
      {{checkedVal}}
      <div class="row">
        <x-checkbox-group @change="change" v-model="checkedVal">
          <x-checkbox-button @change="change" checked :label="1">上网</x-checkbox-button>
          <x-checkbox-button :label="2">看电影</x-checkbox-button>
          <x-checkbox-button :label="3">玩游戏</x-checkbox-button>
          <x-checkbox-button :label="4">跑步</x-checkbox-button>
        </x-checkbox-group>
        </br>
      </div>
    </div>
    </br>
    {{val}}</br>
    <x-checkbox v-model="val" @change="change">上网</x-checkbox>
    <x-button @click="val = 1">选中</x-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        val: '',
        checkedVal: [],
        isChecked: '',
        disabled: true,
        state: [1, 2],
        state2: [],
        hobby: []
      };
    },
    methods: {
      change (val, e) {
        console.log(val);
      }
    }
  };
</script>
