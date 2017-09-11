const config = require('../config');
const path = require('path');
const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');
//css提取
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //获取文件
  getFiles (_path) {
    let entries = {}, baseName;
    glob.sync(path.resolve(__dirname, _path)).forEach((entry) => {
      baseName = path.basename(entry, path.extname(entry));
      entries[baseName] = entry;
    });
    return entries;
  },
  //初始化view
  initView (view) {
    let arr = [];
    Object.keys(view).forEach((name) => {
      const viewPath = view[name];
      //参数
      let options = {
        //路径和名称
        filename: path.basename(viewPath, path.extname(viewPath)) + '.html',
        //模板地址
        template: this.resolve(viewPath),
        inject: true
      };
      //判断是否压缩
      if (this.getPattern === 'build' && config.build.htmlMinify) {
        options.minify = {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        };
      };
      //push
      arr.push(
        new htmlWebpackPlugin(options)
      );
    });
    return arr;
  },
  //初始化入口
  initMain (entry, client) {
    let newEntry = {};
    Object.keys(entry).forEach((name) => {
      //js路径
      let jsPath = this.resolve(entry[name]);
      newEntry[name] = client ? ['./build/client'].concat(jsPath) : jsPath;
    });
    return newEntry;
  },
  //css loader
  getCssLoader (state) {
    const sourceMap = this.sourceMap() ? true : false;
    //css-loader
    let cssLoaders = {
      loader: 'css-loader',
      options: {
        //压缩css
        minimize: this.getPattern === 'build' && config.build.cssMinify,
        sourceMap: sourceMap
      }
    };

    let getLoader = (loaderName) => {
      const styleLoader = `${state ? 'vue-' : ''}style-loader`;
      let loaders = [cssLoaders];
      loaderName && loaders.push({
        loader: `${loaderName}-loader`,
        options: {
          sourceMap: sourceMap
        }
      });

      //判断是否提取css
      if (config[this.getPattern].cssExtract) {
        return extractTextWebpackPlugin.extract({
          fallback: styleLoader,
          use: loaders
        })
      };
      
      //loader
      return [styleLoader].concat(loaders);
    };

    return {
      css: getLoader(),
      scss: getLoader('sass'),
      sass: getLoader('sass'),
      less: getLoader('less')
    };
  },
  cssLooader () {
    let arr = [];
    const loaders = this.getCssLoader();
    //遍历
    Object.keys(loaders).forEach((item) => {
      arr.push({
        test: new RegExp('\\.' + item + '$'),
        use: loaders[item]
      })
    });
    return arr;
  },
  //设置资源路径
  resourcesPath (filePath) {
    let dir = config[this.getPattern].resourcesDir;
    return path.posix.join(dir, filePath);
  },
  //获取当前模式
  getPattern: process.env.IS_DEV === 'true' ? 'dev' : 'build',
  //源码追踪
  sourceMap () {
    //获取当前模式
    const type = this.getPattern;

    //默认配置
    let defaultMap = type === 'dev' ? '#cheap-module-eval-source-map' : '#cheap-module-source-map';

    //是否添加map
    if (config[type].sourceMap) {
      //map类型判断
      return typeof config[type].sourceMap === 'string' ? config[type].sourceMap : defaultMap;
    };

    return false;
  },
  resolve (dir) {
    let base = '../';
    return dir.indexOf(base) === 0 ? path.resolve(__dirname, dir) : path.resolve(__dirname, base, dir);
  }
};