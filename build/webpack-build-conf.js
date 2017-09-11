const merge = require('webpack-merge');
const baseConfig = require('./webpack-base-conf');
const config = require('../config/');
const webpack = require('webpack');
const utils = require('./utils');
const path = require('path');
let optimizeCss = require('optimize-css-assets-webpack-plugin');
const build = config.build;

//build-config
let webpackConfig = {
  //整理入口
  entry: utils.initMain(baseConfig.entry),
  output: {
    filename: 'main/[name].[chunkHash].js',
    chunkFilename: utils.resourcesPath('js/[name].[chunkhash].js')
  },
  plugins: [
    //将依赖的公用模块打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      //提取所有node_modules中的模块
      minChunks: function (module, count) {
        return (
          //验证是否是js文件 并且是node_modules中的
          module.resource && 
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
};

//压缩js
if (build.jsMinify) {
  webpackConfig.plugins.push(
    //压缩代码
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  );
};

module.exports = merge(baseConfig, webpackConfig);