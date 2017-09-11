/*
  * @Module: tooltip内容组件
 * @Author: 小缘
 * @Date: 2017-08-30 22:10:48
 */
export default {
  data () {
    return {
      direction: '',
      type: '',
      content: '',
      show: false,
      left: '',
      top: ''
    };
  },
  render (h) {
    let tipClass = {
      'x-tooltip': true
    };
    // 判断类型是否存在
    if (this.type) {
      tipClass[`x-tooltip-${this.type}`] = true;
    }
    // 方向
    tipClass[`x-tooltip-${this.direction}`] = true;
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
        <div class="x-tooltip-text">{this.content}</div>
        <div class="arrow"></div>
      </div>
    );
  }
};
