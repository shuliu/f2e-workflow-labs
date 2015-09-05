
var gulp = require('gulp');

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
});
// 輸出於 output1
gulp.task('output2', function() {
  gulp.src('assets/vendor/bootstrap/**/*.js', { base: 'assets/vendor'})
    .pipe(gulp.dest('output2'))
});
// 輸出於 output2/bootstrap
gulp.task('output3', function() {
  gulp.src(['assets/vendor/bootstrap/**/*.js','assets/vendor/bootstrap/**/*.css'], { base: 'assets/vendor'})
    .pipe(gulp.dest('output3'))
});
// 輸出於 output2/bootstrap