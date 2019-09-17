const gulp = require('gulp');
const path = require('path');


gulp.task('default', (callback) => {
  console.log('https://leetcode.com/problemset/algorithms/');
  callback();
});

gulp.task('t0001', (callback) => {
  require(path.resolve('archives/task0001-two-sum/twosum.js'))(callback);
});
gulp.task('t0002', (callback) => {
  require(path.resolve('archives/task0002-add-two-num/add-two-num.js'))(callback);
});
gulp.task('t0003', (callback) => {
  require(path.resolve('archives/task0003-longest-substring/longest-substring.js'))(callback);
});
gulp.task('t0004', (callback) => {
  require(path.resolve('archives/task0004-sorted-array-median/sorted-array-median.js'))(callback);
});
gulp.task('t0005', (callback) => {
  require(path.resolve('archives/task0005-longest-palindromic/longest-palindromic.js'))(callback);
});
gulp.task('t0006', (callback) => {
  require(path.resolve('archives/task0006-zigzag-conversion/zigzag-conversion.js'))(callback);
});
gulp.task('t0007', (callback) => {
  require(path.resolve('archives/task0007-reverse-int/reverse-int.js'))(callback);
});
gulp.task('t0008', (callback) => {
  require(path.resolve('archives/task0008-str-to-int/str-to-int.js'))(callback);
});
gulp.task('t0009', (callback) => {
  require(path.resolve('archives/task0009-palindrome-num/palindrome-num.js'))(callback);
});
gulp.task('t0010', (callback) => {
  require(path.resolve('archives/task0010-regex/regex.js'))(callback);
});
gulp.task('t0011', (callback) => {
  require(path.resolve('archives/task0011-most-water/most-water.js'))(callback);
});
gulp.task('t0012', (callback) => {
  require(path.resolve('archives/task0012-int-to-roman/int-to-roman.js'))(callback);
});
gulp.task('t0013', (callback) => {
  require(path.resolve('archives/task0013-roman-to-int/roman-to-int.js'))(callback);
});
gulp.task('t0014', (callback) => {
  require(path.resolve('archives/task0014-longest-common/longest-common.js'))(callback);
});
gulp.task('t0015', (callback) => {
  require(path.resolve('archives/task0015-3sum/3sum.js'))(callback);
});
gulp.task('t0016', (callback) => {
  require(path.resolve('archives/task0016-3sum-closest/3sum-closest.js'))(callback);
});
gulp.task('t0017', (callback) => {
  require(path.resolve('archives/task0017-phone-words/phone-words.js'))(callback);
});
gulp.task('t0018', (callback) => {
  require(path.resolve('archives/task0018-4sum/4sum.js'))(callback);
});
gulp.task('t0019', (callback) => {
  require(path.resolve('archives/task0019-list-rev-del/list-rev-del.js'))(callback);
});
gulp.task('t0020', (callback) => {
  require(path.resolve('archives/task0020-valid-brackets/valid-brackets.js'))(callback);
});
gulp.task('t0021', (callback) => {
  require(path.resolve('archives/task0021-merge-sorted-list/merge-sorted-list.js'))(callback);
});
gulp.task('t0022', (callback) => {
  require(path.resolve('archives/task0022-gen-brackets/gen-brackets.js'))(callback);
});
gulp.task('t0023', (callback) => {
  require(path.resolve('archives/task0023-merge-k-sorted-list/merge-sorted-list.js'))(callback);
});
gulp.task('t0024', (callback) => {
  require(path.resolve('archives/task0024-swap-pair/swap-pair.js'))(callback);
});
gulp.task('t0025', (callback) => {
  require(path.resolve('archives/task0025-swap-k-nodes/swap-k-nodes.js'))(callback);
});
gulp.task('t0026', (callback) => {
  require(path.resolve('archives/task0026-sorted-del-dups/sorted-del-dups.js'))(callback);
});
gulp.task('t0027', (callback) => {
  require(path.resolve('archives/task0027-del-elm/del-elm.js'))(callback);
});
gulp.task('t0028', (callback) => {
  require(path.resolve('archives/task0028-strstr/strstr.js'))(callback);
});
gulp.task('t0029', (callback) => {
  require(path.resolve('archives/task0029-divide-int/divide-int.js'))(callback);
});
gulp.task('t0030', (callback) => {
  require(path.resolve('archives/task0030-all-word-substr/all-word-substr.js'))(callback);
});
gulp.task('t0031', (callback) => {
  require(path.resolve('archives/task0031-next-perm/next-perm.js'))(callback);
});
gulp.task('t0032', (callback) => {
  require(path.resolve('archives/task0032-max-val-brackets/max-val-brackets.js'))(callback);
});
gulp.task('t0033', (callback) => {
  require(path.resolve('archives/task0033-rotate-sorted-list/rotate-sorted-list.js'))(callback);
});
gulp.task('t0034', (callback) => {
  require(path.resolve('archives/task0034-sort-array-bounds/sort-array-bounds.js'))(callback);
});
gulp.task('t0035', (callback) => {
  require(path.resolve('archives/task0035-isrt-pos/insert-pos.js'))(callback);
});
gulp.task('t0036', (callback) => {
  require(path.resolve('archives/task0036-valid-sudoku/valid-sudoku.js'))(callback);
});
gulp.task('t0037', (callback) => {
  require(path.resolve('archives/task0037-sudoku-solver/sudoku-solver.js'))(callback);
});
gulp.task('t0038', (callback) => {
  require(path.resolve('archives/task0038-count-say/count-say.js'))(callback);
});
gulp.task('t0039', (callback) => {
  require(path.resolve('archives/task0039-comb-sum/comb-sum.js'))(callback);
});
gulp.task('t0040', (callback) => {
  require(path.resolve('archives/task0040-comb-sum-2/comb-sum-2.js'))(callback);
});
gulp.task('t0041', (callback) => {
  require(path.resolve('archives/task0041-1st-miss-pos/1st-miss-pos.js'))(callback);
});
gulp.task('t0042', (callback) => {
  require(path.resolve('archives/task0042-trap-rain/trap-rain.js'))(callback);
});
gulp.task('t0043', (callback) => {
  require(path.resolve('archives/task0043-str-multiply/str-multiply.js'))(callback);
});
gulp.task('t0044', (callback) => {
  require(path.resolve('archives/task0044-wildcard-match/wildcard-match.js'))(callback);
});
gulp.task('t0045', (callback) => {
  require(path.resolve('archives/task0045-jump-game-2/jump-game-2.js'))(callback);
});
gulp.task('t0046', (callback) => {
  require(path.resolve('archives/task0046-perms/perms.js'))(callback);
});
gulp.task('t0047', (callback) => {
  require(path.resolve('archives/task0047-perms-2/perms-2.js'))(callback);
});
gulp.task('t0048', (callback) => {
  require(path.resolve('archives/task0048-rotate-img/rotate-img.js'))(callback);
});
gulp.task('t0049', (callback) => {
  require(path.resolve('archives/task0049-anagrams/anagrams.js'))(callback);
});
gulp.task('t0050', (callback) => {
  require(path.resolve('archives/task0050-pow/pow.js'))(callback);
});
gulp.task('t0051', (callback) => {
  require(path.resolve('archives/task0051-n-queens/n-queens.js'))(callback);
});
gulp.task('t0052', (callback) => {
  require(path.resolve('archives/task0052-n-queens-2/n-queens-2.js'))(callback);
});
gulp.task('t0053', (callback) => {
  require(path.resolve('archives/task0053-max-subarray/max-subarray.js'))(callback);
});
gulp.task('t0054', (callback) => {
  require(path.resolve('archives/task0054-spiral-matrix/spiral-mat.js'))(callback);
});
gulp.task('t0055', (callback) => {
  require(path.resolve('archives/task0055-jump-game/jump-game.js'))(callback);
});
gulp.task('t0056', (callback) => {
  require(path.resolve('archives/task0056-merge-itvs/merge-itvs.js'))(callback);
});
gulp.task('t0057', (callback) => {
  require(path.resolve('archives/task0057-inst-itv/insert-itv.js'))(callback);
});
gulp.task('t0058', (callback) => {
  require(path.resolve('archives/task0058-last-word-length/last-word-length.js'))(callback);
});
gulp.task('t0059', (callback) => {
  require(path.resolve('archives/task0059-spiral-matrix-2/spiral-mat-2.js'))(callback);
});
gulp.task('t0060', (callback) => {
  require(path.resolve('archives/task0060-permute-seq/permute-seq.js'))(callback);
});
gulp.task('t0061', (callback) => {
  require(path.resolve('archives/task0061-rotate-list/rotate-list.js'))(callback);
});
gulp.task('t0062', (callback) => {
  require(path.resolve('archives/task0062-unique-paths/unique-paths.js'))(callback);
});
gulp.task('t0063', (callback) => {
  require(path.resolve('archives/task0063-unique-paths-2/unique-paths-2.js'))(callback);
});
gulp.task('t0064', (callback) => {
  require(path.resolve('archives/task0064-min-paths/min-path.js'))(callback);
});
gulp.task('t0065', (callback) => {
  require(path.resolve('archives/task0065-valid-num/valid-num.js'))(callback);
});
gulp.task('t0066', (callback) => {
  require(path.resolve('archives/task0066-plus-1/plus-one.js'))(callback);
});
gulp.task('t0067', (callback) => {
  require(path.resolve('archives/task0067-add-binary/add-binary.js'))(callback);
});
gulp.task('t0068', (callback) => {
  require(path.resolve('archives/task0068-txt-justify/txt-justify.js'))(callback);
});
gulp.task('t0069', (callback) => {
  require(path.resolve('archives/task0069-sqrt/sqrt.js'))(callback);
});
gulp.task('t0070', (callback) => {
  require(path.resolve('archives/task0070-climb-stairs/climb-stairs.js'))(callback);
});
gulp.task('t0071', (callback) => {
  require(path.resolve('archives/task0071-simple-path/simple-path.js'))(callback);
});
gulp.task('t0072', (callback) => {
  require(path.resolve('archives/task0072-edit-dist/edit-dist.js'))(callback);
});
gulp.task('t0073', (callback) => {
  require(path.resolve('archives/task0073-set-mat-0/set-mat-0.js'))(callback);
});
gulp.task('t0074', (callback) => {
  require(path.resolve('archives/task0074-search-2d-mat/search-2d-mat.js'))(callback);
});
gulp.task('t0075', (callback) => {
  require(path.resolve('archives/task0075-sort-colors/sort-colors.js'))(callback);
});
gulp.task('t0076', (callback) => {
  require(path.resolve('archives/task0076-min-win-substr/min-win-substr.js'))(callback);
});
gulp.task('t0077', (callback) => {
  require(path.resolve('archives/task0077-combine/combine.js'))(callback);
});
gulp.task('t0078', (callback) => {
  require(path.resolve('archives/task0078-subsets/subsets.js'))(callback);
});
gulp.task('t0079', (callback) => {
  require(path.resolve('archives/task0079-word-search/word-search.js'))(callback);
});
gulp.task('t0080', (callback) => {
  require(path.resolve('archives/task0080-sorted-del-dups-2/sorted-del-dups-2.js'))(callback);
});
gulp.task('t0081', (callback) => {
  require(path.resolve('archives/task0081-rotate-sorted-list-2/rotate-sorted-list-2.js'))(callback);
});
gulp.task('t0082', (callback) => {
  require(path.resolve('archives/task0082-sorted-list-del-dups-2/sorted-list-del-dups-2.js'))(callback);
});
gulp.task('t0083', (callback) => {
  require(path.resolve('archives/task0083-sorted-list-del-dups/sorted-list-del-dups.js'))(callback);
});
gulp.task('t0084', (callback) => {
  require(path.resolve('archives/task0084-max-rect/max-rect.js'))(callback);
});
gulp.task('t0085', (callback) => {
  require(path.resolve('archives/task0085-max-mat-rect/max-mat-rect.js'))(callback);
});
gulp.task('t0086', (callback) => {
  require(path.resolve('archives/task0086-partition-list/partition-list.js'))(callback);
});
gulp.task('t0087', (callback) => {
  require(path.resolve('archives/task0087-scramble-str/scramble-str.js'))(callback);
});
gulp.task('t0088', (callback) => {
  require(path.resolve('archives/task0088-merge-sort-array/merge-sort-array.js'))(callback);
});
gulp.task('t0089', (callback) => {
  require(path.resolve('archives/task0089-gray-code/gray-code.js'))(callback);
});
gulp.task('t0090', (callback) => {
  require(path.resolve('archives/task0090-subsets-2/subsets-2.js'))(callback);
});
gulp.task('t0091', (callback) => {
  require(path.resolve('archives/task0091-decode-ways/decode-ways.js'))(callback);
});
gulp.task('t0092', (callback) => {
  require(path.resolve('archives/task0092-rev-link-list-2/rev-link-list-2.js'))(callback);
});
gulp.task('t0093', (callback) => {
  require(path.resolve('archives/task0093-restore-ip/restore-ip.js'))(callback);
});
gulp.task('t0094', (callback) => {
  require(path.resolve('archives/task0094-bin-tree-inorder/bin-tree-inorder.js'))(callback);
});
gulp.task('t0095', (callback) => {
  require(path.resolve('archives/task0095-unique-bst-2/unique-bst-2.js'))(callback);
});
gulp.task('t0096', (callback) => {
  require(path.resolve('archives/task0096-unique-bst/unique-bst.js'))(callback);
});
gulp.task('t0097', (callback) => {
  require(path.resolve('archives/task0097-interleave-str/interleave-str.js'))(callback);
});
gulp.task('t0098', (callback) => {
  require(path.resolve('archives/task0098-valid-bst/valid-bst.js'))(callback);
});
gulp.task('t0099', (callback) => {
  require(path.resolve('archives/task0099-restore-bst/restore-bst.js'))(callback);
});
gulp.task('t0100', (callback) => {
  require(path.resolve('archives/task0100-same-tree/same-tree.js'))(callback);
});
gulp.task('t0101', (callback) => {
  require(path.resolve('task0101-symmetric-tree/symmetric-tree.js'))(callback);
});
gulp.task('t0102', (callback) => {
  require(path.resolve('task0102-breadth-first/breadth-first.js'))(callback);
});
gulp.task('t0103', (callback) => {
  require(path.resolve('task0103-breadth-first-zigzag/breadth-first-zigzag.js'))(callback);
});
gulp.task('t0104', (callback) => {
  require(path.resolve('task0104-max-tree-depth/max-tree-depth.js'))(callback);
});
gulp.task('t0105', (callback) => {
  require(path.resolve('task0105-tree-by-in-pre/tree-by-in-pre.js'))(callback);
});
gulp.task('t0106', (callback) => {
  require(path.resolve('task0106-tree-by-in-post/tree-by-in-post.js'))(callback);
});
gulp.task('t0107', (callback) => {
  require(path.resolve('task0107-breadth-first-reverse/breadth-first-reverse.js'))(callback);
});
gulp.task('t0108', (callback) => {
  require(path.resolve('task0108-sorted-arr-to-bst/sorted-arr-to-bst.js'))(callback);
});
gulp.task('t0109', (callback) => {
  require(path.resolve('task0109-sorted-list-to-bst/sorted-list-to-bst.js'))(callback);
});
gulp.task('t0110', (callback) => {
  require(path.resolve('task0110-balanced-tree/balanced-tree.js'))(callback);
});
gulp.task('t0111', (callback) => {
  require(path.resolve('task0111-min-tree-depth/min-tree-depth.js'))(callback);
});
gulp.task('t0112', (callback) => {
  require(path.resolve('task0112-path-sum/path-sum.js'))(callback);
});
gulp.task('t0113', (callback) => {
  require(path.resolve('task0113-path-sum-2/path-sum-2.js'))(callback);
});
gulp.task('t0114', (callback) => {
  require(path.resolve('task0114-flat-tree-to-list/flat-tree-to-list.js'))(callback);
});
gulp.task('t0115', (callback) => {
  require(path.resolve('task0115-distinct-sub/distinct-sub.js'))(callback);
});
gulp.task('t0116', (callback) => {
  require(path.resolve('task0116-tree-node-next-right/tree-node-next-right.js'))(callback);
});
gulp.task('t0117', (callback) => {
  require(path.resolve('task0117-tree-node-next-right-2/tree-node-next-right-2.js'))(callback);
});
gulp.task('t0118', (callback) => {
  require(path.resolve('task0118-pascal-triangle/pascal-triangle.js'))(callback);
});
gulp.task('t0119', (callback) => {
  require(path.resolve('task0119-pascal-triangle-2/pascal-triangle-2.js'))(callback);
});
gulp.task('t0120', (callback) => {
  require(path.resolve('task0120-triangle-min-sum/triangle-min-sum.js'))(callback);
});
gulp.task('t0121', (callback) => {
  require(path.resolve('task0121-buy-sell-stock/buy-sell-stock.js'))(callback);
});
gulp.task('t0122', (callback) => {
  require(path.resolve('task0122-buy-sell-stock-2/buy-sell-stock-2.js'))(callback);
});
gulp.task('t0123', (callback) => {
  require(path.resolve('task0123-buy-sell-stock-3/buy-sell-stock-3.js'))(callback);
});
gulp.task('t0124', (callback) => {
  require(path.resolve('task0124-max-path-sum/max-path-sum.js'))(callback);
});
gulp.task('t0125', (callback) => {
  require(path.resolve('task0125-valid-palindrome/valid-palindrome.js'))(callback);
});
gulp.task('t0126', (callback) => {
  require(path.resolve('task0126-word-ladder-2/word-ladder-2.js'))(callback);
});
gulp.task('t0127', (callback) => {
  require(path.resolve('task0127-word-ladder/word-ladder.js'))(callback);
});
gulp.task('t0128', (callback) => {
  require(path.resolve('task0128-longest-consec-seq/longest-consec-seq.js'))(callback);
});
gulp.task('t0129', (callback) => {
  require(path.resolve('task0129-sum-root-to-leaf/sum-root-to-leaf.js'))(callback);
});
gulp.task('t0130', (callback) => {
  require(path.resolve('task0130-surround-region/surround-region.js'))(callback);
});
gulp.task('t0131', (callback) => {
  require(path.resolve('task0131-palindrome-partition/palindrome-partition.js'))(callback);
});
gulp.task('t0132', (callback) => {
  require(path.resolve('task0132-palindrome-partition-2/palindrome-partition-2.js'))(callback);
});
gulp.task('t0133', (callback) => {
  require(path.resolve('task0133-clone-graph/clone-graph.js'))(callback);
});
gulp.task('t0134', (callback) => {
  require(path.resolve('task0134-gas-station/gas-station.js'))(callback);
});
gulp.task('t0135', (callback) => {
  require(path.resolve('task0135-candy/candy.js'))(callback);
});
gulp.task('t0136', (callback) => {
  require(path.resolve('task0136-single-number/single-number.js'))(callback);
});

gulp.task('t0206', (callback) => {
  require(path.resolve('task0206-rev-link-list/rev-link-list.js'))(callback);
});
