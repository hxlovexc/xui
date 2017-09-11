<template>
  <div class="x-alert-box">
    <x-quote>
      <h4>alert警告框</h4>
      <div class="row x-clear-float">
        <div class="col" v-for="item in $types" :key="item">
          <x-alert :show-icon="false" :type="item">我是一个警告框！Hi，我是一个警告框！Hi</x-alert>
        </div>
      </div>
    </x-quote>

    <x-quote>
      <h4>alert警告框-可以关闭</h4>
      <div class="row x-clear-float">
        <div class="col" v-for="item in $types" :key="item">
          <x-alert closable :show-icon="false" :type="item">我是一个警告框！Hi，我是一个警告框！Hi</x-alert>
        </div>
      </div>
    </x-quote>

    <x-quote>
      <h4>alert警告框-带图标</h4>
      <div class="row x-clear-float">
        <div class="col" v-for="item in $types" :key="item">
          <x-alert closable :type="item">我是一个警告框！Hi，我是一个警告框！Hi</x-alert>
        </div>
      </div>
    </x-quote>

    <x-quote>
      <h4>alert警告框-带标题</h4>
      <div class="row x-clear-float">
        <div class="col" v-for="item in $types" :key="item">
          <x-alert closable title="俺是标题" :type="item">我是一个警告框！Hi，我是一个警告框！Hi</x-alert>
        </div>
      </div>
    </x-quote>
  </div>
</template>

<style scoped lang="scss">
  .x-alert-box{
    .row{
      width: 100%;

      .col{
        width: 380px;
        float: left;
        margin-right: 15px;
        margin-bottom: 10px;
      }
    }
  }
</style>
