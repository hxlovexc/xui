const merge = require('webpack-merge');
const baseConfig = require('./webpack-xui-base-conf');
const config = require('../config/xui');
const utils = require('./utils');

const webpackConfig = merge(baseConfig.config, {
  entry: utils.resolve(config.entry),
  output: {
    //构建输出目录
    path: utils.resolve(config.outputPath),
    libraryTarget: 'umd'
  }
});

baseConfig.build(webpackConfig);
