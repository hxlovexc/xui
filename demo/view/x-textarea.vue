<template>
  <div>
    <h4>textarea输入框</h4>
    <p>当前输入的内容是 => {{msg}}</p>
    <x-textarea placeholder="请输入内容" v-model="msg"></x-textarea>
    </br>

    <h4>大小分类</h4>
    <div class="row" v-for="item in $size" v-if="item !== 'mini'">
      <x-textarea :size="item" placeholder="请输入内容"></x-textarea>
    </div>
    </br>

    <h4>inline</h4>
    <div class="row" v-for="item in $size" v-if="item !== 'mini'">
      <x-textarea inline :size="item" placeholder="请输入内容"></x-textarea>
    </div>
    </br>

    <h4>颜色分类</h4>
    <div class="row" v-for="item in $types">
      <x-textarea :type="item" :placeholder="`${item}`"></x-textarea>
    </div>
    </br>

    <h4>圆角</h4>
    <div class="row" v-for="item in $types">
      <x-textarea radius :type="item" :placeholder="`${item}`"></x-textarea>
    </div>
    </br>

    <h4>禁用</h4>
    <div class="row">
      <x-textarea disabled placeholder="请输入内容"></x-textarea>
    </div>
    </br>

    <h4>focus</h4>
    <p>当前输入的内容是 => {{msg}}</p>
    <x-textarea @focus="console" placeholder="请输入内容"></x-textarea>
    </br>

    <h4>blur</h4>
    <p>当前输入的内容是 => {{msg}}</p>
    <x-textarea @blur="console" placeholder="请输入内容"></x-textarea>
    </br>

    <h4>change</h4>
    <p>当前输入的内容是 => {{msg}}</p>
    <x-textarea @change="console" placeholder="请输入内容"></x-textarea>
    </br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      };
    },
    methods: {
      console (val, el) {
        console.log(val, el);
      }
    }
  };
</script>

