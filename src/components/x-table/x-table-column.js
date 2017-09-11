export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    renderHead: {
      type: Function
    },
    sort: {
      type: Boolean,
      default: false
    },
    sortMethod: {
      type: Function
    }
  },
  data () {
    return {
      column: {}
    };
  },
  render () {
    return null;
  },
  created () {
    this.column = {
      label: this.label,
      width: this.width,
      name: this.name,
      show: this.show,
      sort: this.sort,
      sortMethod: this.sortMethod,
      sortType: '',
      // render头部
      renderHead: (h) => {
        let head = this.$slots.head;
        if (head) {
          return h('div', [head]);
        }
        return this.label;
      },
      // render表格内容
      renderContent: (h, row, index) => {
        let content = this.$scopedSlots.default;
        let data = row;
        let name = this.name;
        // 添加$index
        data = Object.assign({}, {
          $index: index + 1,
          row: data
        });
        if (content) {
          data.$index = data.$index - 1;
          let scopeData = name ? (name === '$index' ? data.$index : data.row[name]) : data;
          return h('div', [content(scopeData)]);
        }
        return data.row[name] || data[name];
      }
    };
  },
  mounted () {
    this.$parent.column.push(this.column);
  }
};
