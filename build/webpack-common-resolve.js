const utils = require('./utils');

module.exports = {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    'components': utils.resolve('src/components/'),
    'static': utils.resolve('src/static/'),
    'mixins': utils.resolve('src/mixins/'),
    'directives': utils.resolve('src/directives/'),
    'utils': utils.resolve('src/utils/'),
    'base-components': utils.resolve('src/base-components/')
  }
}
