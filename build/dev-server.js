/*
  express服务
*/

process.env.IS_DEV = true;

const express = require('express');
const open = require('open');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack-dev-conf');
//热更新
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const os = require('os');

let app = express();
let compiler = webpack(webpackConfig);

//获取内网ip
function getLocalIp () {
  let ip = [];
  let ifaces = os.networkInterfaces();
  for (var dev in ifaces) {
    if(ifaces[dev][1].address.indexOf('192.168') != -1) {
      return ifaces[dev][1].address;
    }
  }
  return ip;
}

//文件加载到内存
let dev = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

//热更新
let hotUpdate = webpackHotMiddleware(compiler, {
  log: () => {}
});

//页面代码变化的时候自动刷新
compiler.plugin('compilation', function (build) {
  build.plugin('html-webpack-plugin-after-emit', (data, fun) => {
    hotUpdate.publish({ action: 'reload' });
    fun();
  })
})

app.use(dev);
app.use(hotUpdate);

//资源路径
app.use(express.static(path.resolve(__dirname, '../demo/')));

console.log('-> 正在启动开发服务');
dev.waitUntilValid(() => {
  let url = `http://localhost:${config.dev.port}`;
  console.log(`-> 开发服务启动完成`);
  console.log(`-> 请访问${url} or http://${getLocalIp()}:${config.dev.port}`);
  //打开浏览器
  config.dev.autoOpen && open(url);
});

//监听端口
app.listen(config.dev.port);