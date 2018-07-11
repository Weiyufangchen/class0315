//引入gulp模块
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
/*const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const less = require('gulp-less');*/
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
/*const cssmin = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');  //热更新
const connect = require('gulp-connect'); */ //使页面自动打开
const open = require('open');

//定义默认任务
/*gulp.task('jshint', function () {
  //将你的任务的任务代码放在这
  return gulp.src('./src/js/!*.js')
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter('default'));
});*/
// 检查语法错误 -- 进行语法转换 -- 合并js文件 -- 压缩js文件
gulp.task('minifyjs', function () {
  return gulp.src('./src/js/*.js')  //导入要检查的文件
    .pipe($.jshint({esversion: 6}))   //检查js语法错误
    .pipe($.jshint.reporter('default'))  //使用默认的错误提示
    .pipe($.babel({   //语法转换  es6 --> es5
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe($.concat('built.js'))   //合并所有js文件并命名
    .pipe(gulp.dest('./build/js'))
    .pipe($.uglify())  //压缩js代码
    .pipe($.rename('dist.min.js'))  //重命名js文件
    .pipe(gulp.dest('./dist/js/'))  //输出
    .pipe($.livereload())
});

//less
gulp.task('minifycss', function () {
  return gulp.src('./src/less/*.less')
    .pipe($.less({    //将less文件编译成css文件
      plugins: [autoprefix]  //增加前缀
    }))
    .pipe(gulp.dest('build/css'))
    .pipe($.concat('built.css'))
    .pipe(gulp.dest('build/css'))
    .pipe($.cssmin())  //压缩css
    .pipe($.rename('dist.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe($.livereload())
});

//html
gulp.task('minifyhtml', function () {
  return gulp.src('src/index.html')
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe($.livereload())
});

gulp.task('watch', ['default'], function () {
  $.livereload.listen();
  //配置热更新
  $.connect.server({
    root: 'dist', //访问目录
    livereload: true,
    port: 3000
  });
  //打开网页
  open('http://localhost:3000');
  //配置监视任务
  gulp.watch('./src/js/*.js', ['minifyjs']);
  gulp.watch('./src/less/*.less', ['minifycss']);
  gulp.watch('./src/index.html', ['minifyhtml'])
})
//注册执行任务
gulp.task('default', ['minifyjs', 'minifycss', 'minifyhtml']);   //异步执行



