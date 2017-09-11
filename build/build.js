/*
  编译入口
*/

process.env.IS_DEV = false;
process.env.NODE_ENV = 'production'

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const buildConfig = require('./webpack-build-conf');
const config = require('../config/');
const webpack = require('webpack');

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
let outputPath = path.resolve(__dirname, config.build.outputPath);
console.log(`正在删除 => ${outputPath}`);
// rm(outputPath, (err) => {
  // if (err) console.log(`警告 -> ${outputPath} 目录删除失败,编译后目录下可能存在旧代码`);
  //执行打包
  runWebpack();
// });
