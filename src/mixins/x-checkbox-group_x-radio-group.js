/*
  * @Module: x-checkbox-button和x-radio-button共用
 * @Author: 小缘
 * @Date: 2017-06-11 23:50:01
 */
module.exports = {
  props: {
    radius: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
};
