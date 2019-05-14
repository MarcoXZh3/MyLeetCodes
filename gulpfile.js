const gulp = require('gulp');


gulp.task('default', (callback) => {
  console.log('https://leetcode.com/problemset/algorithms/');
  callback();
});

gulp.task('t0001', (callback) => {
  require('./task0001-two-sum/twosum.js')(callback);
});
gulp.task('t0002', (callback) => {
  require('./task0002-add-two-num/add-two-num.js')(callback);
});
gulp.task('t0003', (callback) => {
  require('./task0003-longest-substring/longest-substring.js')(callback);
});
gulp.task('t0004', (callback) => {
  require('./task0004-sorted-array-median/sorted-array-median.js')(callback);
});
gulp.task('t0005', (callback) => {
  require('./task0005-longest-palindromic/longest-palindromic.js')(callback);
});
