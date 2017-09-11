<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'default'
      },
      value: {
        type: [String, Number]
      }
    },
    data () {
      return {
        contents: [],
        active: '',
        activeBarWidth: 0,
        activeBarLeft: 0
      };
    },
    methods: {
      switchTab (event, name, index) {
        name = name || index;
        if (this.contents[index].disabled) return;
        this.active = name;
        this.setActiveBar(
          this.getTab(index)
        );
        this.$emit('change', name, this.$el);
        this.$emit('input', name);
      },
      remove (event, index) {
        let list = this.contents;
        if (list[index].disabled) return;
        event.stopPropagation();
        // 移除内容和nav
        let data = list.splice(index, 1)[0];
        this.$slots.default.splice(index, 1);
        // 重新计算高亮
        // 判断是否删除选中的
        if (data.curKey === this.active) {
          let newCur = list[index] || list[index - 1];
          this.active = newCur.curKey;
        }
        // this.setActiveBar(
        //   this.getTab(index - 1)
        // );
      },
      setActiveBar (el) {
        this.activeBarWidth = el.clientWidth;
        // left设置
        this.activeBarLeft = el.getBoundingClientRect().left - this.$refs.tabs.getBoundingClientRect().left;
      },
      changeActiveBar () {
        // 计算激活状态条
        if (this.type === 'default') {
          this.$nextTick(() => {
            let activeBarWidth = 0;
            let activeBarLeft = 0;
            for (let i = 0; i < this.contents.length; i++) {
              const item = this.contents[i];
              const width = this.getTab(i).clientWidth;
              if (item.name === this.active || i === this.active) {
                activeBarWidth = width;
                break;
              } else {
                activeBarLeft += width;
              }
            }
            this.activeBarWidth = activeBarWidth;
            this.activeBarLeft = activeBarLeft;
          });
        }
      },
      getTab (index) {
        return this.$refs.tabs.querySelectorAll('li')[index];
      }
    },
    watch: {
      value (value) {
        if (value === this.active) return;
        this.changeActiveBar();
        this.active = value;
      }
    },
    mounted () {
      // 默认展示第一个
      this.active = this.value || this.contents[0].curKey;
      // 计算状态条位置
      this.type === 'default' && this.changeActiveBar();
    },
    render (h) {
      // 遍历导航
      // <div class='x-tabs-remove-btn'>
      //   <i
      //     class='x-icon-close-empty'
      //     on-click={(event) => {
      //       this.remove(event, index);
      //     }}
      //     ></i>
      // </div>
      let tabs = this._l(this.contents, (item, index) => {
        const navLabel = item.label || item.$slots.label;
        return (
          <li
            ref="li"
            class={{
              'x-tabs-nav-active': this.active === item.curKey,
              'x-disabled': item.disabled
            }}
            on-click={(event) => this.switchTab(event, item.curKey, index)}
          >
            {navLabel}
          </li>
        );
      });
      let activeBar = this.type === 'default' ? (
        <div
          class="x-tabs-active-bar"
          style={{
            width: this.activeBarWidth + 'px',
            transform: `translateX(${this.activeBarLeft}px)`
          }}
        ></div>
      ) : null;
      return (
        <div
          class={['x-tabs-box', 'x-tabs-' + this.type]}>
          <ul
            class="x-tabs-nav"
            ref='tabs'
          >
            {tabs}
            {activeBar}
          </ul>
          <div class='x-tabs-content'>
            {this.$slots.default}
          </div>
        </div>
      );
    }
  };
</script>
