/*
 * @Module:  组件查询方法
 * @Author: 小缘
 * @Date: 2017-06-03 23:56:05
 */

// 查找子组件
export function find (name, callback) {
  const childrens = this.$children;
  let components = [];
  if (childrens.length) {
    childrens.forEach((item) => {
      const childName = item.$options.name;
      const childs = item.$children;
      // 判断name是否相等
      if (name === childName) {
        components.push(item);
        callback && callback(item);
      }
      // 判断是否还存在子组件
      childs.length && find(item, name, callback);
    });
  }
  return components;
}

// 查找父组件
export function parent (name, callback) {
  let parent = this.$parent;
  let parentName = parent.$options.name;
  // 递归
  while (parent && parentName !== name) {
    parent = parent.$parent;
    if (parent) {
      parentName = parent.$options.name;
    }
  }
  return parent;
}
