<template>
  <div class="row">
    <h3>下拉选择</h3>
    <div class="row">
      <h4>默认</h4>
      <p>{{model}}</p>
      <x-select v-model="model">
        <x-option v-for="(item, index) in curOptions" :key="index" :value="item.value" :label="item.label"></x-option>
      </x-select>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        model: 2,
        options: [],
        value1: '',
        value2: [],
        value: {},
        newOptions: [
          {
            value: 1,
            label: '选择1'
          },
          {
            value: 2,
            label: '选择2'
          },
          {
            value: 3,
            label: '选择3'
          }
        ],
        curOptions: []
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
    },
    mounted () {
      setTimeout(() => {
        this.curOptions = this.newOptions;
      }, 3000);
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
