const merge = require('webpack-merge');
const baseConfig = require('./webpack-xui-base-conf');
const config = require('../config/xui');
const utils = require('./utils');

// 入口
let entrys = {};
const files = utils.rdDir('../src/components/**/*.js');
const basePath = 'components/';

// 组织入口
files.forEach((item) => {
  if (item.lastIndexOf('index.js')) {
    const name = item.slice(item.indexOf(basePath) + basePath.length, item.lastIndexOf('/'));
    entrys[name] = item;
  }
});

const webpackConfig = merge(baseConfig.config, {
  entry: entrys,
  output: {
    //构建输出目录
    path: utils.resolve(config.componentsOutputPath)
  }
});

baseConfig.build(webpackConfig);
