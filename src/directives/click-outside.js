/*
  * @Module: 点击指定元素意外之行函数
 * @Author: 小缘
 * @Date: 2017-06-22 00:09:58
 */
function clickEvent (event) {
  console.log(event.target);
}

export default {
  bind (el, bind) {
    document.addEventListener('click', clickEvent);
  },
  unbind () {
    document.removeEventListener('click', clickEvent);
  }
};
