/*
  * @Module: 遮罩
 * @Author: 小缘
 * @Date: 2017-07-23 09:51:48
 */
class Xmask {
  constructor () {
    this.id = 'x-mask';
    this.el = '';
  }
  create () {
    const doc = document;
    let el = doc.getElementById(this.id);
    if (el) return;
    el = doc.createElement('div');
    el.id = this.id;
    this.el = el;
    doc.body.appendChild(el);
  }
  remove () {
    this.el && document.body.removeChild(this.el);
    this.el = '';
  }
}

export default new Xmask();
