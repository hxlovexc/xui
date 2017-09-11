/*
  * @Module: popover内容组件
 * @Author: 小缘
 * @Date: 2017-08-30 22:10:48
 */
export default {
  data () {
    return {
      direction: '',
      type: '',
      content: '',
      title: '',
      show: false,
      left: '',
      top: ''
    };
  },
  render (h) {
    let tipClass = {
      'x-popover': true
    };
    // 方向
    tipClass[`x-popover-${this.direction}`] = true;
    // tip样式
    let tipStyle = {
      left: this.left + 'px',
      top: this.top + 'px'
    };
    // 是否显示
    tipStyle.display = this.show ? 'inline-block' : 'none';
    return (
      <div
        class={tipClass}
        style={tipStyle}
      >
        <div class="x-popover-text">
          {this.title ? <div class="x-popover-title">{this.title}</div> : null}
          <div class="x-popover-content">{this.content}</div>
        </div>
        <span class="arrow"></span>
      </div>
    );
  }
};
