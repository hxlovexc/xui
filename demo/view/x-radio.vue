<template>
  <div>
    <div class="row">
      <h4>{{defaultState}}</h4>
      <x-radio v-model="defaultState" :label="123">默认</x-radio>
    </div>
    </br>

    <div class="row">
      <p>你以选择{{state}}</p>
      <x-radio v-model="state" label="西瓜">西瓜</x-radio>
      <x-radio v-model="state" label="芒果">芒果</x-radio>
      <x-radio v-model="state" checked label="苹果">苹果</x-radio>
      <x-radio v-model="state" label="桃子">桃子</x-radio>
    </div>
    </br>
    <x-button @click="state = '桃子'">选择桃子</x-button>

    <!--颜色分类-->
    <div class="row">
      <x-radio v-for="(item, index) in $types" :key="index" :type="item">{{item}}</x-radio>
    </div>
    </br>

    <!--组-->
    <h5>{{hobby}}</h5>
    <div class="row">
      <x-radio-group v-model="hobby">
        <x-radio :label="1" checked>篮球</x-radio>
        <x-radio :label="2">足球</x-radio>
        <x-radio :label="3">羽毛球</x-radio>
        <x-radio :label="4">沙滩球</x-radio>
      </x-radio-group>
    </div>
    <!--组-->
    <div class="row">
      <h3>单选按钮 -> 你选择了{{region}}</h3>
      <div class="row">
        <x-radio-group button v-model="region">
          <x-radio-button :label="1">长沙</x-radio-button>
          <x-radio-button :label="2">深圳</x-radio-button>
          <x-radio-button :label="3">广州</x-radio-button>
        </x-radio-group>
        </br>
      </div>
    </div>

    <!--圆角-->
    <div class="row">
      <h3>圆角</h3>
      <div class="row" v-for="item in $types">
        <x-radio-group button v-model="region" :type="item" radius>
          <x-radio-button :label="1">长沙</x-radio-button>
          <x-radio-button :label="2">深圳</x-radio-button>
          <x-radio-button :label="3">广州</x-radio-button>
        </x-radio-group>
        </br>
      </div>
    </div>

    <!--大小分类-->
    <div class="row">
      <h3>大小分类</h3>
      <div class="row" v-for="item in $size">
        <x-radio-group button v-model="region":size="item">
          <x-radio-button :label="1">长沙</x-radio-button>
          <x-radio-button :label="2">深圳</x-radio-button>
          <x-radio-button :label="3">广州</x-radio-button>
        </x-radio-group>
        </br>
      </div>
    </div>
    
    <!--圆角-->
    <div class="row">
      <h3>禁用</h3>
      <x-radio disabled checked v-model="disabledChecked" :label="1">长沙</x-radio>
      <x-radio disabled :label="1">长沙</x-radio>
      <div class="row">
        <x-radio-group type="success" button v-model="region" radius>
          <x-radio-button disabled :label="1">长沙</x-radio-button>
          <x-radio-button :label="2">深圳</x-radio-button>
          <x-radio-button :label="3">广州</x-radio-button>
        </x-radio-group>
        </br>
      </div>
    </div>
    
    <!--change-->
    <div class="row">
      <h3>change</h3>
      <x-radio @change="change" v-model="changeVal" :label="1">选项一</x-radio>
      <x-radio @change="change" v-model="changeVal" :label="2">选项二</x-radio>
      <div class="row">
        <x-radio-group type="success" @change="change" v-model="changeGroupVal" radius>
          <x-radio :label="1">长沙</x-radio>
          <x-radio :label="2">深圳</x-radio>
          <x-radio :label="3">广州</x-radio>
        </x-radio-group>
        </br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultState: '',
        state: '3',
        changeVal: '',
        changeGroupVal: '',
        types: [
          'primary',
          'success',
          'warning',
          'danger',
          'dark'
        ],
        hobby: '',
        region: '',
        disabledChecked: ''
      };
    },
    methods: {
      change (value) {
        window.alert(value);
      }
    }
  };
</script>
