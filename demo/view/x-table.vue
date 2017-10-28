<template>
  <div class="table">
    <x-quote>
      <h4>默认</h4>
      <x-table :data="list1">
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
      </x-table>
    </x-quote>

    <x-quote>
      <h4>size分类</h4>
      <x-table :data="list1" v-for="item in $size" :size="item" :key="item" v-if="item !== 'mini'">
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
      </x-table>
    </x-quote>

    <x-quote>
      <h4>带外边框</h4>
      <x-table :data="list1" bordered>
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
      </x-table>
    </x-quote>

    <x-quote>
      <h4>条纹</h4>
      <x-table :data="list1" bordered striped>
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
      </x-table>
    </x-quote>

    <x-quote>
      <h4>hover背景</h4>
      <x-table :data="list1" bordered hover>
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
      </x-table>
    </x-quote>

    <x-quote>
      <h4>无边框</h4>
      <x-table :data="list1" no-border>
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
      </x-table>
    </x-quote>

    <x-quote>
      <h4>自定义模板内容</h4>
      <x-table :data="list2" bordered>
        <x-table-column label="序列" name="$index" :width="60"></x-table-column> 
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column> 
        <x-table-column label="性别" name="sex" :width="100">
          <template slot="head">
            <i class="x-icon-person"></i>性别
          </template>
          <template scope="sex">
            <x-tag>{{sex ? '男' : '女'}}</x-tag>
          </template>
        </x-table-column>
        <x-table-column label="状态">
          <template scope="data">
            <x-button
              size="mini"
              :type="data.row.state ? 'primary' : 'danger'"
              @click="data.row.state = !data.row.state"
            >{{data.row.state ? '显示' : '隐藏'}}</x-button>
          </template>
        </x-table-column>
      </x-table>
      </br>
      <x-button @click="remove">移除-名称04</x-button>
    </x-quote>

    <x-quote>
      <h4>高度</h4>
      <x-table :data="list3" bordered :height="350">
        <x-table-column label="序列" name="$index" :width="60"></x-table-column>
        <x-table-column label="名称" name="name" :width="150"></x-table-column>
        <x-table-column label="年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄" name="age"></x-table-column>
      </x-table>
      </br>
      </br>
      <x-button @click="addData">添加数据</x-button>
    </x-quote>

    <x-quote>
      <h4>排序</h4>
      <x-table :data="list4">
        <x-table-column label="序列" name="$index"></x-table-column> 
        <x-table-column label="名称" name="name"></x-table-column>
        <x-table-column label="年龄" sort name="age"></x-table-column>
      </x-table>
    </x-quote>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list1: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 21,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 21,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称07',
            age: 21,
            sex: 0,
            state: true
          }, {
            name: '名称01',
            age: 21,
            sex: 0,
            state: true
          }
        ],
        list2: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 21,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 21,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称07',
            age: 21,
            sex: 0,
            state: true
          }, {
            name: '名称01',
            age: 21,
            sex: 0,
            state: true
          }
        ],
        list3: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 21,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 21,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称07',
            age: 21,
            sex: 0,
            state: true
          }, {
            name: '名称01',
            age: 21,
            sex: 0,
            state: true
          }
        ],
        list4: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 18,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 58,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 21,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 21,
            sex: 1,
            state: false
          }, {
            name: '名称07',
            age: 43,
            sex: 0,
            state: true
          }, {
            name: '名称01',
            age: 9,
            sex: 0,
            state: true
          }
        ]
      };
    },
    methods: {
      remove () {
        this.list2.splice(3, 1);
      },
      addData () {
        this.list3.push({
          name: '名称01',
          age: 21,
          sex: 0,
          state: true
        });
      }
    }
  };
</script>
