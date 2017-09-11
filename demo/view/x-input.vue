<template>
  <div>
    <h4>输入框</h4>
    <p>当前输入的内容是 => {{msg}}</p>
    <div class="row">
      <x-input placeholder="默认" v-model="msg"></x-input>
    </div>
    </br>

    <h4>最多10个</h4>
    <p>当前输入的内容是 => {{maxMsg}}</p>
    <div class="row">
      <x-input placeholder="默认" :max="10" v-model="maxMsg"></x-input>
    </div>
    </br>

    <h4>inline</h4>
    <div class="row">
      <x-input inline placeholder="inline输入框"></x-input>
    </div>
    </br>

    <h4>size分类</h4>
    <div class="row" v-if="item !== 'mini'" v-for="item in $size">
      <x-input placeholder="输入框" :size="item"></x-input>
    </div>
    </br>

    <h4>颜色分类</h4>
    <div class="row">
      <x-input placeholder="默认" inline></x-input>
    </div>
    <div class="row" v-for="item in $types">
      <x-input :type="item" inline :placeholder="`${item}输入框`"></x-input>
    </div>
    </br>

    <h4>圆角</h4>
    <div class="row">
      <x-input radius placeholder="默认" inline></x-input>
    </div>
    <div class="row" v-for="item in $types">
      <x-input radius :type="item" inline :placeholder="`${item}输入框`"></x-input>
    </div>
    </br>

    <h4>禁用</h4>
    <div class="row" v-if="item !== 'mini'" v-for="item in $size">
      <x-input placeholder="输入框" v-model="msg" disabled :size="item"></x-input>
    </div>
    </br>

    <h4>带图标的输入框</h4>
    <div class="row">
      <x-input placeholder="默认" icon="x-icon-image" inline></x-input>
    </div>
    <div class="row" v-for="item in $types">
      <x-input :type="item" inline icon="x-icon-image" :placeholder="`${item}输入框`"></x-input>
    </div>
    <div class="row" v-if="item !== 'mini'" v-for="item in $size">
      <x-input :size="item" inline icon="x-icon-image" :placeholder="`${item}输入框`"></x-input>
    </div>
    </br>

    <h4>x-input-group</h4>
    <div class="row">
      <x-input placeholder="默认">
        <template slot="left">www</template>
        <template slot="right">
          <x-button>.com</x-button>
        </template>
      </x-input>
    </div>
    </br>
    <div class="row">
      <x-input radius placeholder="默认">
        <template slot="right">
          <x-button>.com</x-button>
        </template>
      </x-input>
    </div>
    </br>
    <div class="row">
      <x-input radius placeholder="默认">
        <template slot="left">www</template>
      </x-input>
    </div>
    </br>
    
    <div class="row">
      <h4>圆角</h4>
      <x-input radius placeholder="圆角">
        <template slot="left">www</template>
        <template slot="right">
          <x-button>.com</x-button>
        </template>
      </x-input>
    </div>
    </br>

    <h4>禁用</h4>
    <div class="row">
      <x-input placeholder="默认" disabled>
        <template slot="left">www</template>
        <template slot="right">
          <x-button>.com</x-button>
        </template>
      </x-input>
    </div>
    </br>

    <div class="row">
      <h4>大小</h4>
      <div class="row" v-if="item !== 'mini'" v-for="item in $size">
        <x-input radius placeholder="圆角" :size="item">
          <template slot="left">www</template>
          <template slot="right">
            <x-button>.com</x-button>
          </template>
        </x-input>
      </div>
    </div>
    </br>

    <h3>事件 <small>请到控制台查看事件执行</small></h3>
    <h4>图标点击</h4>
    <div class="row">
      <x-input placeholder="默认" icon="x-icon-image" @icon-click="event" inline></x-input>
    </div>
    </br>

    <h4>focus</h4>
    <div class="row">
      <x-input placeholder="默认" icon="x-icon-image" @focus="event" inline></x-input>
    </div>
    </br>

    <h4>blur</h4>
    <div class="row">
      <x-input placeholder="默认" icon="x-icon-image" @blur="event" inline></x-input>
    </div>
    </br>

    <h4>change</h4>
    <div class="row">
      <x-input placeholder="默认" icon="x-icon-image" @change="event" inline></x-input>
    </div>
    </br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        maxMsg: ''
      };
    },
    methods: {
      event (el, msg) {
        console.log(el, msg);
      }
    }
  };
</script>

