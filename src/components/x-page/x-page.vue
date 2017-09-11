<template>
  <div
    class="x-page"
    :class="[
      'x-page-' + size,
      {
        'x-page-border': border,
        'x-page-radius': radius,
        'x-page-clearance': clearance
      }
    ]"
  >
    <div @selectstart="selectstart" class="x-page-list-box">
      <ul>
        <li
          @click="prev"
          :class="[firstOneClass]"
        >
           <i class="x-icon-arrow-left"></i>
        </li>
        <li
          v-if="length > listNumber && curPage > floorList"
          @click="setPage(1)"
          :class="[firstOneClass]"
        >首页</li>
      </ul>
      <ul @click="selectPage">
        <li
          v-for="item in list"
          :key="item"
          :index="item"
          :class="{
            'x-page-active': item === curPage
          }"
        >{{item}}</li>
      </ul>
      <ul>
        <li
          v-if="length > listNumber && curPage <= length - floorList"
          @click="setPage(length)"
          :class="lastClass"
        >末页</li>
        <li
          @click="next"
          :class="lastClass"
        >
           <i class="x-icon-arrow-right"></i>
        </li>
      </ul>
    </div>
    <!--选项-->
    <div class="x-page-input" v-if="input">
      <span>到第</span>
      <input @input="inputChange" v-model="curPage" @keyup.enter="enter" type="text">
      <span>页</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      border: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'default'
      },
      radius: {
        type: Boolean,
        default: true
      },
      clearance: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number,
        default () {
          return 1;
        }
      },
      input: {
        type: Boolean,
        default: false
      },
      total: {
        type: Number,
        required: true
      },
      pageSize: {
        type: Number,
        default () {
          return 10;
        }
      }
    },
    data () {
      return {
        curPage: 1,
        // 禁用class
        disabledClass: 'x-page-disabled',
        listNumber: 7
      };
    },
    methods: {
      setPage (page) {
        this.curPage = page;
      },
      // 上一页
      prev () {
        const page = this.curPage - 1;
        if (page === 0) return;
        this.curPage = page;
      },
      // 下一页
      next () {
        const page = this.curPage + 1;
        if (page > this.length) return;
        this.curPage = page;
      },
      // 禁止选择文字
      selectstart (event) {
        event.preventDefault();
      },
      // 分页点击 - 事件委托在ul
      selectPage ({ target }) {
        if (target.tagName === 'LI') {
          // 转换
          const index = Number(target.getAttribute('index'));
          this.setPage(index);
        }
      },
      // input修改
      enter ({ target }) {
        let value = target.value;
        // 禁止重复提交
        if (value === this.curPage) return;
        if (value > this.length) {
          value = this.length;
          target.value = value;
        } else if (!value) {
          value = 1;
          target.value = value;
        }
        this.setPage(Number(value));
      },
      inputChange ({ target }) {
        let value = target.value;
        value = this.isNaN(parseInt(value, 10));
        target.value = value;
      },
      // 是否是NaN
      isNaN (value) {
        if (isNaN(value)) {
          value = 1;
        }
        return value;
      }
    },
    watch: {
      value (value) {
        this.curPage = this.isNaN(parseInt(value, 10));
      },
      curPage (value) {
        this.$emit('change', value);
        this.$emit('input', value);
      }
    },
    computed: {
      // 前面禁用
      firstOneClass () {
        return this.curPage === 1 ? this.disabledClass : '';
      },
      lastClass () {
        return this.curPage === this.length ? this.disabledClass : '';
      },
      length () {
        return Math.ceil(this.total / this.pageSize);
      },
      // 列表数量
      list () {
        let length = this.length;
        if (length > this.listNumber) {
          let list = [], start, end;
          start = this.curPage - 3;
          // 设置起始位置
          if (start < 1) {
            start = 1;
          } else {
            let i = length - this.listNumber;
            start = start > i ? i + 1 : start;
          }
          end = start + (this.listNumber - 1);
          // 生成数组
          for (start; start <= end; start++) {
            list.push(start);
          }
          return list;
        }
        return length;
      },
      floorList () {
        return Math.ceil(this.listNumber / 2);
      }
    }
  };
</script>
