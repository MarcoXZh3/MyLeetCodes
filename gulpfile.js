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
gulp.task('t0006', (callback) => {
  require('./task0006-zigzag-conversion/zigzag-conversion.js')(callback);
});
gulp.task('t0007', (callback) => {
  require('./task0007-reverse-int/reverse-int.js')(callback);
});
gulp.task('t0008', (callback) => {
  require('./task0008-str-to-int/str-to-int.js')(callback);
});
gulp.task('t0009', (callback) => {
  require('./task0009-palindrome-num/palindrome-num.js')(callback);
});
gulp.task('t0010', (callback) => {
  require('./task0010-regex/regex.js')(callback);
});
gulp.task('t0011', (callback) => {
  require('./task0011-most-water/most-water.js')(callback);
});
gulp.task('t0012', (callback) => {
  require('./task0012-int-to-roman/int-to-roman.js')(callback);
});
gulp.task('t0013', (callback) => {
  require('./task0013-roman-to-int/roman-to-int.js')(callback);
});
gulp.task('t0014', (callback) => {
  require('./task0014-longest-common/longest-common.js')(callback);
});
gulp.task('t0015', (callback) => {
  require('./task0015-3sum/3sum.js')(callback);
});
gulp.task('t0016', (callback) => {
  require('./task0016-3sum-closest/3sum-closest.js')(callback);
});
gulp.task('t0017', (callback) => {
  require('./task0017-phone-words/phone-words.js')(callback);
});
gulp.task('t0018', (callback) => {
  require('./task0018-4sum/4sum.js')(callback);
});
gulp.task('t0019', (callback) => {
  require('./task0019-list-rev-del/list-rev-del.js')(callback);
});
gulp.task('t0020', (callback) => {
  require('./task0020-valid-brackets/valid-brackets.js')(callback);
});
gulp.task('t0021', (callback) => {
  require('./task0021-merge-sorted-list/merge-sorted-list.js')(callback);
});
gulp.task('t0022', (callback) => {
  require('./task0022-gen-brackets/gen-brackets.js')(callback);
});
gulp.task('t0023', (callback) => {
  require('./task0023-merge-k-sorted-list/merge-sorted-list.js')(callback);
});
