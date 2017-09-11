const webpack = require('webpack');
const utils = require('./utils');
const config = require('../config/xui');
const ora = require('ora');
const rm = require('rimraf');
const webpackProgress = require('progress-bar-webpack-plugin');
const resolve = require('./webpack-common-resolve');
const outputPath = utils.resolve(config.outputPath);

let buildConfig = {
  entry: utils.resolve(config.entry),
  output: {
    filename: '[name].js',
    //构建输出目录
    path: utils.resolve(config.outputPath),
    //请求目录
    publicPath: '/',
    libraryTarget: 'umd',
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
};

// 压缩
if (process.env.model === 'build') {
  buildConfig.output.filename = '[name].min.js'
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

//删除打包文件
// console.log(`正在删除 => ${outputPath}`);
// rm(outputPath, (err) => {
  // if (err) console.log(`警告 -> ${outputPath} 目录删除失败,编译后目录下可能存在旧代码`);
  //执行打包
  runWebpack();
// });


