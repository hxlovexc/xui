import xTableThead from './x-table-head';
import xTableWidth from './x-table-width.vue';
import { getScrollbarWidth } from 'utils';
import { on, off } from 'utils/dom';

export default {
  props: {
    data: {
      type: Array,
      default () {
        return [];
      },
      required: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default () {
        return 0;
      }
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      list: this.data,
      column: [],
      headWidths: [],
      scrollWidth: getScrollbarWidth() + 'px',
      showScroll: false
    };
  },
  methods: {
    sort (key, type) {
      this.data.sort((a, b) => {
        if (type === 'up') {
          return a[key] > b[key] ? 1 : -1;
        }
        return a[key] < b[key] ? 1 : -1;
      });
    },
    calculateColWidth () {
      if (this.height) {
        this.$nextTick(() => {
          const tableBodyHeight = this.$refs['table'].offsetHeight;
          let tdList = this.$refs.table.querySelectorAll('tbody tr')[0].querySelectorAll('td');
          let column = this.column;
          let headWidths = [];
          // 是否显示滚动条
          this.showScroll = tableBodyHeight > this.height;
          // width
          tdList = Array.from(tdList);
          tdList.forEach((item, index) => {
            headWidths.push({
              width: column[index].width || item.offsetWidth
            });
          });
          this.headWidths = headWidths;
        });
      }
    }
  },
  watch: {
    data (value) {
      this.calculateColWidth();
    }
  },
  // computed: {
  //   resize () {
  //     return debounce(this.calculateColWidth, 300);
  //   }
  // },
  render (h) {
    if (this.data.length === 0) return null;
    let fixedHead = this.height ? (
      <div
        class="x-table-header"
        style={{
          'padding-right': this.showScroll ? this.scrollWidth : ''
        }}
      >
        <table class="x-table">
          <x-table-width list={this.headWidths}></x-table-width>
          <x-table-thead on-sort={this.sort} data={this.column}></x-table-thead>
        </table>
      </div>
    ) : null;
    let tableClass = {
      'x-table-box': true,
      'x-table-bordered': this.bordered,
      'x-table-striped': this.striped,
      'x-table-hover': this.hover,
      'no-border': this.noBorder,
      'x-table-fixed-head': this.height
    };
    // 文字布局
    tableClass['x-text-' + this.textAlign[0]] = true;
    // size
    tableClass['x-table-' + this.size] = true;

    return (
        <div
          class={tableClass}
        >
          {this.$slots.default}
          {fixedHead}
          <div
            class={{
              'x-table-body': true,
              'x-table-scroll-body': this.height
            }}
            style={{
              maxHeight: this.height ? this.height - 1 + 'px' : 'auto'
            }}
          >
            <table class="x-table" ref="table">
              {
                this.height ? null : <x-table-thead on-sort={this.sort} data={this.column}></x-table-thead>
              }
              <x-table-width list={this.column}></x-table-width>
              <tbody>
                {
                  this._l(this.data, (row, index) => {
                    return (
                      <tr>
                        {
                          this._l(this.column, (col) => {
                            return (
                              <td>{col.renderContent(h, row, index)}</td>
                            );
                          })
                        }
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
    );
  },
  components: {
    xTableThead,
    xTableWidth
  },
  mounted () {
    this.calculateColWidth();
    on(window, 'resize', this.calculateColWidth);
  },
  beforeDestroy () {
    off(window, 'resize', this.calculateColWidth);
  }
};
