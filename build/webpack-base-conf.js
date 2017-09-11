const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const utils = require('./utils');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackProgress = require('progress-bar-webpack-plugin');
const resolve = require('./webpack-common-resolve');
//css提取
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const hash = `[hash${typeof config.hashLength === 'number' ? `:${config.hashLength}` : ''}]`;

//入口html
let view = config.view;
//基础配置
const baseConfig = {
  //入口
  entry: config.entry,
  output: {
    //构建输出目录
    path: utils.resolve(config.build.outputPath),
    //请求目录
    publicPath: config[utils.getPattern].publicPath
  },
  resolve: resolve,
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [utils.resolve('demo'), utils.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      //css编译
      ...utils.cssLooader(),
      //js-es6编译
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [utils.resolve('src'), utils.resolve('demo')]
      },
      //图片和svg
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resourcesPath(`images/[name].${hash}.[ext]`)
        }
      },
      //字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resourcesPath(`font-icon/[name].${hash}.[ext]`)
        }
      },
      //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.getCssLoader(true)
        }
      }
    ]
  },
  //map
  devtool: utils.sourceMap(),
  //插件
  plugins: [
    new webpackProgress()
  ]
};

//判断是否自动载入
if (typeof config.view === 'string' && typeof baseConfig.entry === 'string') {
  view = utils.getFiles(config.view);
  baseConfig.entry = utils.getFiles(baseConfig.entry);
};

//加载插件
baseConfig.plugins = baseConfig.plugins.concat(
  //html
  utils.initView(view),
  //css单独提取
  config[utils.getPattern].cssExtract ? new ExtractTextPlugin({
    filename: utils.resourcesPath('css/[name].css'),
    allChunks: true
  }) : []
);

module.exports = baseConfig;