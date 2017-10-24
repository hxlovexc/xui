/**
 * @module [单独打包每个组件到lib下]
 * @author [贺喜]
 * @create date 2017-10-20 06:47:34
 * @params [description]
*/

const merge = require('webpack-merge');
const baseConfig = require('./webpack-xui-base-conf');
const config = require('../config/xui');
const utils = require('./utils');
const rm = require('rimraf');

// 输出目录
const outputPath = utils.resolve(config.componentsOutputPath);

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
    // 构建输出目录
    path: outputPath,
    filename: '[name]/index.js',
    libraryTarget: 'umd',
    library: '[name]'
  }
});

// 清空目录
rm(outputPath, () => {
  baseConfig.build(webpackConfig);
});
