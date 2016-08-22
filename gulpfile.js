var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var minifyJS = require('gulp-uglify');
var minifyHTML = require('gulp-htmlmin');
var connect = require('gulp-connect');

gulp.task('less', function () {
  return gulp.src('css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
})

gulp.task('css', function () {
  return gulp.src([
      'css/thirdParty/*.css',
      'css/**/*.css'
    ])
    .pipe(concat('style.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('.'));
});

gulp.task('js', function () {
  return gulp.src([
      'js/thirdParty/jquery-1.12.4.min.js',
      'js/thirdParty/dom-i18n.min.js',
      'js/**/*.js'
    ])
    .pipe(concat('index.js'))
    .pipe(minifyJS())
    .pipe(gulp.dest('.'));
});

gulp.task('html', function () {
  return gulp.src('html/**/*.html')
    .pipe(minifyHTML({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
  gulp.watch('css/**/*.less', ['less']);
  gulp.watch('css/**/*.css', ['css']);
  gulp.watch('js/**/*.js', ['js']);
  gulp.watch('html/**/*.html', ['html']);
});

gulp.task('server', function () {
  connect.server();
});

gulp.task('default', function (){
  runSequence('less', ['css', 'js', 'html'], 'watch', 'server');
});
