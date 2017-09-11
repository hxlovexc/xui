const gulp = require("gulp");
//sass编译
const sass = require("gulp-sass-china");
const autoprefixer = require("gulp-autoprefixer");
//压缩css
const minifycss = require("gulp-minify-css");
//重命名
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

//资源路径
let staticPath = "../src/static/";
//资源保存地址
let config = {
  //开发环境打包存放到demo下
  devPath: "../demo/static/",
  //打包存放路径
  buildPath: "../dist/",
  // 组件目录
  componentsPath: "../dist/static/css/components/",
  // 所有样式
  xui: "scss/xui.scss",
  // 单个组件
  components: "scss/components/*.scss"
};
// 资源保存路径
let savePath = config.buildPath;
// 是否压缩代码
let isMinifycss = false;
// sass入口
let sassMain = config.xui;

//sass
gulp.task("sass", () => {
  let surGulp = gulp.src(staticPath + sassMain)
                  .pipe(plumber())
                  .pipe(sass())
                  .pipe(autoprefixer({browsers: ["last 2 versions"]}))
  // 判断是否压缩
  if (isMinifycss) {
    surGulp.pipe(minifycss())
    surGulp.pipe(rename("xui.min.css"))
  }
  surGulp.pipe(gulp.dest(savePath + '/css/'))
});

//拷贝字体
gulp.task("copy", () => {
  return gulp.src(staticPath + "fonts/**/*.{swf,eot,svg,ttf,woff}")
      .pipe(plumber())
      .pipe(gulp.dest(savePath + "fonts/"));
});

gulp.task("watch",function(){
  //监听sass
  gulp.watch(staticPath + "scss/**/*.scss",["sass"]);
  gulp.watch(staticPath + "fonts/*.{swf,eot,svg,ttf,woff}", ["copy"]);
});

gulp.task('clean', () => {
  return gulp.src(config.buildPath)
    .pipe($.clean());
});

//不压缩
gulp.task("default", () => {
  gulp.start("sass", "copy");
});

//压缩
gulp.task("build-mini", () => {
  isMinifycss = true;
  gulp.start("sass", "copy");
});

// 组件打包
gulp.task("build-components", () => {
  savePath = config.componentsPath;
  sassMain = config.components;
  gulp.start("sass");
});

//开发
gulp.task("dev", () => {
  savePath = config.devPath;
  gulp.start("sass", "copy", "watch");
});