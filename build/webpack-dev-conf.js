const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config');
const utils = require('./utils');
//错误提示插件
const errorsPlugin = require('friendly-errors-webpack-plugin');
//基础配置
let baseConfig = require('./webpack-base-conf');

const webpackConfig = {
  output: {
    //文件名称
    filename: 'main/[name].js',
    chunkFilename: utils.resourcesPath('js/[id].js')
  },
  //整理入口
  entry: utils.initMain(baseConfig.entry, true),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new errorsPlugin()
   ]
};

//合并
module.exports = merge(baseConfig, webpackConfig);