/*
  * @Module: 辅助函数
 * @Author: 小缘
 * @Date: 2017-08-31 12:34:23
 */
export function getScrollbarWidth () {
  // 获取滚动条宽度
  let $p = document.createElement('p');
  let styles = {
    width: '100px',
    height: '100px',
    overflowY: 'scroll'
  };
  let scrollbarWidth;
  for (let i in styles) {
    $p.style[i] = styles[i];
  }
  document.body.appendChild($p);
  scrollbarWidth = $p.offsetWidth - $p.clientWidth;
  document.body.removeChild($p);
  return scrollbarWidth;
}

// 节流函数
export function debounce (fun, waitTime = 500) {
  let timeout = '';
  function method () {
    const self = this, arg = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fun.apply(self, arg);
    }, waitTime);
  }

  // 取消方法
  method.clear = function () {
    clearTimeout(timeout);
    timeout = '';
  };
  return method;
}
