
var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('default', ['mytask1'], function() {
  console.log('Hello, Gulp!');
});

// 相依性練習
gulp.task('mytask1', ['mytask2'], function() {
  console.log('my task 1');
});
gulp.task('mytask2', function() {
  console.log('my task 2');
});

// 輸出練習
gulp.task('output1', function() {
  gulp.src('assets/vendor/bootstrap/**/*.js')
    .pipe(gulp.dest('output1'))
});// 輸出於 output1
gulp.task('output2', function() {
  gulp.src('assets/vendor/bootstrap/**/*.js', { base: 'assets/vendor'})
    .pipe(gulp.dest('output2'))
});// 輸出於 output2/bootstrap
gulp.task('output3', function() {
  gulp.src(['assets/vendor/bootstrap/**/*.js','assets/vendor/bootstrap/**/*.css'], { base: 'assets/vendor'})
    .pipe(gulp.dest('output3'))
});
// 資料夾整合
gulp.task('output4', function() {
  gulp.src(['assets/vendor/angular*/*.js'])
    .pipe(gulp.dest('output4'))
});

// 刪除完後建立檔案
gulp.task('output_after_clean', ['clean'], function() {
  gulp.src('assets/vendor/bootstrap/**/*.js', { base: 'assets/vendor'})
    .pipe(gulp.dest('output2'))
});// 輸出於 output2/bootstrap
// clean
gulp.task('clean', function(cb) {
  del(['output2/**', '!output2/']).then(function(paths){
    console.log(paths.join('\n'));
  }).then(cb);
});

// watch 間聽事件 若目標檔案有變更則執行動作
gulp.task('watch', function() {
  gulp.watch(['assets/vendor/bootstrap/**/*.js'], ['output_after_clean'], function(event){
    console.log(event)
  })
});

gulp.task('concat-app', function() {
  gulp.src(['app/**/*.js','!app/**/*.module.js'])
    .pipe(concat('app.buildes.js'))
    .pipe(gulp.dest('assets'));
  gulp.src(['app/**/*.module.js'])
    .pipe(concat('app.modules.js'))
    .pipe(gulp.dest('assets'));
});

