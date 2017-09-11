<template>
  <div>
    <x-page v-model="curPage" :total="500"></x-page>
    <h4>分页</h4>
    <div v-for="item in $size" :key="item" v-if="item !== 'mini'">
      <x-page :size="item" :total="500"></x-page>
      </br>
      </br>
    </div>
    </br>
    </br>
    <h4>间隙</h4>
    <div v-for="item in $size" :key="item" v-if="item !== 'mini'">
      <x-page :size="item" :total="500" clearance></x-page>
      </br>
      </br>
    </div>
    <h4>带input</h4>
    <div v-for="item in $size" :key="item" v-if="item !== 'mini'">
      <x-page :total="500" :size="item" @change="change" input></x-page>
      </br>
      </br>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        curPage: 1
      };
    },
    methods: {
      change (page) {
        console.log(page);
      }
    },
    mounted () {
      setTimeout(() => {
        this.curPage = 5;
      });
    }
  };
</script>

