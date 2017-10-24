const webpack = require('webpack');
const webpackProgress = require('progress-bar-webpack-plugin');
const merge = require('webpack-merge');
const ora = require('ora');
const rm = require('rimraf');
const utils = require('./utils');
const config = require('../config/xui');
const resolve = require('./webpack-common-resolve');

module.exports = {
  config: {
    output: {
      filename: '[name].js',
      //请求目录
      publicPath: '/',
      umdNamedDefine: true
    },
    resolve: resolve,
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
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
        {
          test: /\.js$/,
          use: ['babel-loader'],
          include: [utils.resolve('src')]
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
    //插件
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        progress: true,
        hide_modules: true
      }),
      new webpackProgress(),
      new webpack.optimize.ModuleConcatenationPlugin()
    ],
    //map
    devtool: utils.sourceMap(),
  },
  // 打包
  build (buildConfig) {
    // 压缩
    if (process.env.model === 'build') {
      buildConfig.output.filename = buildConfig.output.filename.replace('.js', '.min.js');
      buildConfig.plugins.push(
        //压缩代码
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          sourceMap: true
        })
      );
    }

    //打包
    let runWebpack = () => {
      //开始打包
      let orastate = ora('build -> 正在编译代码...').start();
      webpack(buildConfig, (error, stats) => {
        orastate.stop();
        if (error) {
          console.log('警告 -> 编译出错');
          throw err;
        };

        console.log(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }));

        //错误不存在提示完成
        if (!error) console.log('提示 -> 代码编译完成');
      })
    };

    runWebpack();
  }
};