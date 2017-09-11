<template>
  <div class="row">
    <div class="row">
      <h4>拖拽滑块 当前value是 => {{defaultVal}}</h4>
      <x-slider v-model="defaultVal" :step="10"></x-slider>
    </div>
    </br>
    
    <div class="row">
      <h4>颜色分类</h4>
      <div v-for="item in $types" :key="item">
        <x-slider :type="item"></x-slider>
        </br>
      </div>
    </div>
    </br>
    
    <div class="row">
      <h4>双滑块</h4>
      <div v-for="item in $types" :key="item">
        <x-slider range :type="item"></x-slider>
        </br>
      </div>
    </div>
    </br>

    <div class="row">
      <h4>自定义max</h4>
      <p>{{val}}</p>
      <div v-for="item in $types" :key="item">
        <x-slider v-model="val" range @change="change" :max="15" :type="item"></x-slider>
        </br>
      </div>
    </div>
    </br>
    
    <!-- <div class="row">
      <h4>禁用</h4>
      <div class="row">
        <x-slider disabled v-model="val1"></x-slider>
        </br>
        <x-slider range disabled v-model="disabledVal"></x-slider>
      </div>
    </div> -->
    </br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultVal: 0,
        val1: 50,
        val: [2, 10],
        disabledVal: [5, 50]
      };
    },
    methods: {
      change (value) {
        // console.log(value);
      }
    }
  };
</script>
