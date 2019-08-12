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
gulp.task('t0024', (callback) => {
  require('./task0024-swap-pair/swap-pair.js')(callback);
});
gulp.task('t0025', (callback) => {
  require('./task0025-swap-k-nodes/swap-k-nodes.js')(callback);
});
gulp.task('t0026', (callback) => {
  require('./task0026-sorted-del-dups/sorted-del-dups.js')(callback);
});
gulp.task('t0027', (callback) => {
  require('./task0027-del-elm/del-elm.js')(callback);
});
gulp.task('t0028', (callback) => {
  require('./task0028-strstr/strstr.js')(callback);
});
gulp.task('t0029', (callback) => {
  require('./tasks0029-divide-int/divide-int.js')(callback);
});
gulp.task('t0030', (callback) => {
  require('./task0030-all-word-substr/all-word-substr.js')(callback);
});
gulp.task('t0031', (callback) => {
  require('./task0031-next-perm/next-perm.js')(callback);
});
gulp.task('t0032', (callback) => {
  require('./task0032-max-val-brackets/max-val-brackets.js')(callback);
});
gulp.task('t0033', (callback) => {
  require('./task0033-rotate-sorted-list/rotate-sorted-list.js')(callback);
});
gulp.task('t0034', (callback) => {
  require('./task0034-sort-array-bounds/sort-array-bounds.js')(callback);
});
gulp.task('t0035', (callback) => {
  require('./task0035-isrt-pos/insert-pos.js')(callback);
});
gulp.task('t0036', (callback) => {
  require('./task0036-valid-sudoku/valid-sudoku.js')(callback);
});
gulp.task('t0037', (callback) => {
  require('./task0037-sudoku-solver/sudoku-solver.js')(callback);
});
gulp.task('t0038', (callback) => {
  require('./task0038-count-say/count-say.js')(callback);
});
gulp.task('t0039', (callback) => {
  require('./task0039-comb-sum/comb-sum.js')(callback);
});
gulp.task('t0040', (callback) => {
  require('./task0040-comb-sum-2/comb-sum-2.js')(callback);
});
gulp.task('t0041', (callback) => {
  require('./task0041-1st-miss-pos/1st-miss-pos.js')(callback);
});
gulp.task('t0042', (callback) => {
  require('./task0042-trap-rain/trap-rain.js')(callback);
});
gulp.task('t0043', (callback) => {
  require('./task0043-str-multiply/str-multiply.js')(callback);
});
gulp.task('t0044', (callback) => {
  require('./task0044-wildcard-match/wildcard-match.js')(callback);
});
gulp.task('t0045', (callback) => {
  require('./task0045-jump-game-2/jump-game-2.js')(callback);
});
gulp.task('t0046', (callback) => {
  require('./task0046-perms/perms.js')(callback);
});
gulp.task('t0047', (callback) => {
  require('./task0047-perms-2/perms-2.js')(callback);
});
gulp.task('t0048', (callback) => {
  require('./task0048-rotate-img/rotate-img.js')(callback);
});
gulp.task('t0049', (callback) => {
  require('./task0049-anagrams/anagrams.js')(callback);
});
gulp.task('t0050', (callback) => {
  require('./task0050-pow/pow.js')(callback);
});
gulp.task('t0051', (callback) => {
  require('./task0051-n-queens/n-queens.js')(callback);
});
gulp.task('t0052', (callback) => {
  require('./task0052-n-queens-2/n-queens-2.js')(callback);
});
gulp.task('t0053', (callback) => {
  require('./task0053-max-subarray/max-subarray.js')(callback);
});
gulp.task('t0054', (callback) => {
  require('./task0054-spiral-matrix/spiral-mat.js')(callback);
});
gulp.task('t0055', (callback) => {
  require('./task0055-jump-game/jump-game.js')(callback);
});
gulp.task('t0056', (callback) => {
  require('./task0056-merge-itvs/merge-itvs.js')(callback);
});
gulp.task('t0057', (callback) => {
  require('./task0057-inst-itv/insert-itv.js')(callback);
});
gulp.task('t0058', (callback) => {
  require('./task0058-last-word-length/last-word-length.js')(callback);
});
gulp.task('t0059', (callback) => {
  require('./task0059-spiral-matrix-2/spiral-mat-2.js')(callback);
});
gulp.task('t0060', (callback) => {
  require('./task0060-permute-seq/permute-seq.js')(callback);
});
gulp.task('t0061', (callback) => {
  require('./task0061-rotate-list/rotate-list.js')(callback);
});
gulp.task('t0062', (callback) => {
  require('./task0062-unique-paths/unique-paths.js')(callback);
});
gulp.task('t0063', (callback) => {
  require('./task0063-unique-paths-2/unique-paths-2.js')(callback);
});
gulp.task('t0064', (callback) => {
  require('./task0064-min-paths/min-path.js')(callback);
});
gulp.task('t0065', (callback) => {
  require('./task0065-valid-num/valid-num.js')(callback);
});
gulp.task('t0066', (callback) => {
  require('./task0066-plus-1/plus-one.js')(callback);
});
gulp.task('t0067', (callback) => {
  require('./task0067-add-binary/add-binary.js')(callback);
});
gulp.task('t0068', (callback) => {
  require('./task0068-txt-justify/txt-justify.js')(callback);
});
gulp.task('t0069', (callback) => {
  require('./task0069-sqrt/sqrt.js')(callback);
});
gulp.task('t0070', (callback) => {
  require('./task0070-climb-stairs/climb-stairs.js')(callback);
});
gulp.task('t0071', (callback) => {
  require('./task0071-simple-path/simple-path.js')(callback);
});
gulp.task('t0072', (callback) => {
  require('./task0072-edit-dist/edit-dist.js')(callback);
});
gulp.task('t0073', (callback) => {
  require('./task0073-set-mat-0/set-mat-0.js')(callback);
});
gulp.task('t0074', (callback) => {
  require('./task0074-search-2d-mat/search-2d-mat.js')(callback);
});
gulp.task('t0075', (callback) => {
  require('./task0075-sort-colors/sort-colors.js')(callback);
});
gulp.task('t0076', (callback) => {
  require('./task0076-min-win-substr/min-win-substr.js')(callback);
});
gulp.task('t0077', (callback) => {
  require('./task0077-combine/combine.js')(callback);
});
