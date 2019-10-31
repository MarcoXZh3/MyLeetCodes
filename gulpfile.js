const chp = require('child_process');
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');


gulp.task('default', (callback) => {
  console.log('https://leetcode.com/problemset/algorithms/');
  callback();
});

gulp.task('t0001', (callback) => {
  require(path.resolve('archives001/task0001-two-sum/twosum.js'))(callback);
});
gulp.task('t0002', (callback) => {
  require(path.resolve('archives001/task0002-add-two-num/add-two-num.js'))(callback);
});
gulp.task('t0003', (callback) => {
  require(path.resolve('archives001/task0003-longest-substring/longest-substring.js'))(callback);
});
gulp.task('t0004', (callback) => {
  require(path.resolve('archives001/task0004-sorted-array-median/sorted-array-median.js'))(callback);
});
gulp.task('t0005', (callback) => {
  require(path.resolve('archives001/task0005-longest-palindromic/longest-palindromic.js'))(callback);
});
gulp.task('t0006', (callback) => {
  require(path.resolve('archives001/task0006-zigzag-conversion/zigzag-conversion.js'))(callback);
});
gulp.task('t0007', (callback) => {
  require(path.resolve('archives001/task0007-reverse-int/reverse-int.js'))(callback);
});
gulp.task('t0008', (callback) => {
  require(path.resolve('archives001/task0008-str-to-int/str-to-int.js'))(callback);
});
gulp.task('t0009', (callback) => {
  require(path.resolve('archives001/task0009-palindrome-num/palindrome-num.js'))(callback);
});
gulp.task('t0010', (callback) => {
  require(path.resolve('archives001/task0010-regex/regex.js'))(callback);
});
gulp.task('t0011', (callback) => {
  require(path.resolve('archives001/task0011-most-water/most-water.js'))(callback);
});
gulp.task('t0012', (callback) => {
  require(path.resolve('archives001/task0012-int-to-roman/int-to-roman.js'))(callback);
});
gulp.task('t0013', (callback) => {
  require(path.resolve('archives001/task0013-roman-to-int/roman-to-int.js'))(callback);
});
gulp.task('t0014', (callback) => {
  require(path.resolve('archives001/task0014-longest-common/longest-common.js'))(callback);
});
gulp.task('t0015', (callback) => {
  require(path.resolve('archives001/task0015-3sum/3sum.js'))(callback);
});
gulp.task('t0016', (callback) => {
  require(path.resolve('archives001/task0016-3sum-closest/3sum-closest.js'))(callback);
});
gulp.task('t0017', (callback) => {
  require(path.resolve('archives001/task0017-phone-words/phone-words.js'))(callback);
});
gulp.task('t0018', (callback) => {
  require(path.resolve('archives001/task0018-4sum/4sum.js'))(callback);
});
gulp.task('t0019', (callback) => {
  require(path.resolve('archives001/task0019-list-rev-del/list-rev-del.js'))(callback);
});
gulp.task('t0020', (callback) => {
  require(path.resolve('archives001/task0020-valid-brackets/valid-brackets.js'))(callback);
});
gulp.task('t0021', (callback) => {
  require(path.resolve('archives001/task0021-merge-sorted-list/merge-sorted-list.js'))(callback);
});
gulp.task('t0022', (callback) => {
  require(path.resolve('archives001/task0022-gen-brackets/gen-brackets.js'))(callback);
});
gulp.task('t0023', (callback) => {
  require(path.resolve('archives001/task0023-merge-k-sorted-list/merge-sorted-list.js'))(callback);
});
gulp.task('t0024', (callback) => {
  require(path.resolve('archives001/task0024-swap-pair/swap-pair.js'))(callback);
});
gulp.task('t0025', (callback) => {
  require(path.resolve('archives001/task0025-swap-k-nodes/swap-k-nodes.js'))(callback);
});
gulp.task('t0026', (callback) => {
  require(path.resolve('archives001/task0026-sorted-del-dups/sorted-del-dups.js'))(callback);
});
gulp.task('t0027', (callback) => {
  require(path.resolve('archives001/task0027-del-elm/del-elm.js'))(callback);
});
gulp.task('t0028', (callback) => {
  require(path.resolve('archives001/task0028-strstr/strstr.js'))(callback);
});
gulp.task('t0029', (callback) => {
  require(path.resolve('archives001/task0029-divide-int/divide-int.js'))(callback);
});
gulp.task('t0030', (callback) => {
  require(path.resolve('archives001/task0030-all-word-substr/all-word-substr.js'))(callback);
});
gulp.task('t0031', (callback) => {
  require(path.resolve('archives001/task0031-next-perm/next-perm.js'))(callback);
});
gulp.task('t0032', (callback) => {
  require(path.resolve('archives001/task0032-max-val-brackets/max-val-brackets.js'))(callback);
});
gulp.task('t0033', (callback) => {
  require(path.resolve('archives001/task0033-rotate-sorted-list/rotate-sorted-list.js'))(callback);
});
gulp.task('t0034', (callback) => {
  require(path.resolve('archives001/task0034-sort-array-bounds/sort-array-bounds.js'))(callback);
});
gulp.task('t0035', (callback) => {
  require(path.resolve('archives001/task0035-isrt-pos/insert-pos.js'))(callback);
});
gulp.task('t0036', (callback) => {
  require(path.resolve('archives001/task0036-valid-sudoku/valid-sudoku.js'))(callback);
});
gulp.task('t0037', (callback) => {
  require(path.resolve('archives001/task0037-sudoku-solver/sudoku-solver.js'))(callback);
});
gulp.task('t0038', (callback) => {
  require(path.resolve('archives001/task0038-count-say/count-say.js'))(callback);
});
gulp.task('t0039', (callback) => {
  require(path.resolve('archives001/task0039-comb-sum/comb-sum.js'))(callback);
});
gulp.task('t0040', (callback) => {
  require(path.resolve('archives001/task0040-comb-sum-2/comb-sum-2.js'))(callback);
});
gulp.task('t0041', (callback) => {
  require(path.resolve('archives001/task0041-1st-miss-pos/1st-miss-pos.js'))(callback);
});
gulp.task('t0042', (callback) => {
  require(path.resolve('archives001/task0042-trap-rain/trap-rain.js'))(callback);
});
gulp.task('t0043', (callback) => {
  require(path.resolve('archives001/task0043-str-multiply/str-multiply.js'))(callback);
});
gulp.task('t0044', (callback) => {
  require(path.resolve('archives001/task0044-wildcard-match/wildcard-match.js'))(callback);
});
gulp.task('t0045', (callback) => {
  require(path.resolve('archives001/task0045-jump-game-2/jump-game-2.js'))(callback);
});
gulp.task('t0046', (callback) => {
  require(path.resolve('archives001/task0046-perms/perms.js'))(callback);
});
gulp.task('t0047', (callback) => {
  require(path.resolve('archives001/task0047-perms-2/perms-2.js'))(callback);
});
gulp.task('t0048', (callback) => {
  require(path.resolve('archives001/task0048-rotate-img/rotate-img.js'))(callback);
});
gulp.task('t0049', (callback) => {
  require(path.resolve('archives001/task0049-anagrams/anagrams.js'))(callback);
});
gulp.task('t0050', (callback) => {
  require(path.resolve('archives001/task0050-pow/pow.js'))(callback);
});
gulp.task('t0051', (callback) => {
  require(path.resolve('archives001/task0051-n-queens/n-queens.js'))(callback);
});
gulp.task('t0052', (callback) => {
  require(path.resolve('archives001/task0052-n-queens-2/n-queens-2.js'))(callback);
});
gulp.task('t0053', (callback) => {
  require(path.resolve('archives001/task0053-max-subarray/max-subarray.js'))(callback);
});
gulp.task('t0054', (callback) => {
  require(path.resolve('archives001/task0054-spiral-matrix/spiral-mat.js'))(callback);
});
gulp.task('t0055', (callback) => {
  require(path.resolve('archives001/task0055-jump-game/jump-game.js'))(callback);
});
gulp.task('t0056', (callback) => {
  require(path.resolve('archives001/task0056-merge-itvs/merge-itvs.js'))(callback);
});
gulp.task('t0057', (callback) => {
  require(path.resolve('archives001/task0057-inst-itv/insert-itv.js'))(callback);
});
gulp.task('t0058', (callback) => {
  require(path.resolve('archives001/task0058-last-word-length/last-word-length.js'))(callback);
});
gulp.task('t0059', (callback) => {
  require(path.resolve('archives001/task0059-spiral-matrix-2/spiral-mat-2.js'))(callback);
});
gulp.task('t0060', (callback) => {
  require(path.resolve('archives001/task0060-permute-seq/permute-seq.js'))(callback);
});
gulp.task('t0061', (callback) => {
  require(path.resolve('archives001/task0061-rotate-list/rotate-list.js'))(callback);
});
gulp.task('t0062', (callback) => {
  require(path.resolve('archives001/task0062-unique-paths/unique-paths.js'))(callback);
});
gulp.task('t0063', (callback) => {
  require(path.resolve('archives001/task0063-unique-paths-2/unique-paths-2.js'))(callback);
});
gulp.task('t0064', (callback) => {
  require(path.resolve('archives001/task0064-min-paths/min-path.js'))(callback);
});
gulp.task('t0065', (callback) => {
  require(path.resolve('archives001/task0065-valid-num/valid-num.js'))(callback);
});
gulp.task('t0066', (callback) => {
  require(path.resolve('archives001/task0066-plus-1/plus-one.js'))(callback);
});
gulp.task('t0067', (callback) => {
  require(path.resolve('archives001/task0067-add-binary/add-binary.js'))(callback);
});
gulp.task('t0068', (callback) => {
  require(path.resolve('archives001/task0068-txt-justify/txt-justify.js'))(callback);
});
gulp.task('t0069', (callback) => {
  require(path.resolve('archives001/task0069-sqrt/sqrt.js'))(callback);
});
gulp.task('t0070', (callback) => {
  require(path.resolve('archives001/task0070-climb-stairs/climb-stairs.js'))(callback);
});
gulp.task('t0071', (callback) => {
  require(path.resolve('archives001/task0071-simple-path/simple-path.js'))(callback);
});
gulp.task('t0072', (callback) => {
  require(path.resolve('archives001/task0072-edit-dist/edit-dist.js'))(callback);
});
gulp.task('t0073', (callback) => {
  require(path.resolve('archives001/task0073-set-mat-0/set-mat-0.js'))(callback);
});
gulp.task('t0074', (callback) => {
  require(path.resolve('archives001/task0074-search-2d-mat/search-2d-mat.js'))(callback);
});
gulp.task('t0075', (callback) => {
  require(path.resolve('archives001/task0075-sort-colors/sort-colors.js'))(callback);
});
gulp.task('t0076', (callback) => {
  require(path.resolve('archives001/task0076-min-win-substr/min-win-substr.js'))(callback);
});
gulp.task('t0077', (callback) => {
  require(path.resolve('archives001/task0077-combine/combine.js'))(callback);
});
gulp.task('t0078', (callback) => {
  require(path.resolve('archives001/task0078-subsets/subsets.js'))(callback);
});
gulp.task('t0079', (callback) => {
  require(path.resolve('archives001/task0079-word-search/word-search.js'))(callback);
});
gulp.task('t0080', (callback) => {
  require(path.resolve('archives001/task0080-sorted-del-dups-2/sorted-del-dups-2.js'))(callback);
});
gulp.task('t0081', (callback) => {
  require(path.resolve('archives001/task0081-rotate-sorted-list-2/rotate-sorted-list-2.js'))(callback);
});
gulp.task('t0082', (callback) => {
  require(path.resolve('archives001/task0082-sorted-list-del-dups-2/sorted-list-del-dups-2.js'))(callback);
});
gulp.task('t0083', (callback) => {
  require(path.resolve('archives001/task0083-sorted-list-del-dups/sorted-list-del-dups.js'))(callback);
});
gulp.task('t0084', (callback) => {
  require(path.resolve('archives001/task0084-max-rect/max-rect.js'))(callback);
});
gulp.task('t0085', (callback) => {
  require(path.resolve('archives001/task0085-max-mat-rect/max-mat-rect.js'))(callback);
});
gulp.task('t0086', (callback) => {
  require(path.resolve('archives001/task0086-partition-list/partition-list.js'))(callback);
});
gulp.task('t0087', (callback) => {
  require(path.resolve('archives001/task0087-scramble-str/scramble-str.js'))(callback);
});
gulp.task('t0088', (callback) => {
  require(path.resolve('archives001/task0088-merge-sort-array/merge-sort-array.js'))(callback);
});
gulp.task('t0089', (callback) => {
  require(path.resolve('archives001/task0089-gray-code/gray-code.js'))(callback);
});
gulp.task('t0090', (callback) => {
  require(path.resolve('archives001/task0090-subsets-2/subsets-2.js'))(callback);
});
gulp.task('t0091', (callback) => {
  require(path.resolve('archives001/task0091-decode-ways/decode-ways.js'))(callback);
});
gulp.task('t0092', (callback) => {
  require(path.resolve('archives001/task0092-rev-link-list-2/rev-link-list-2.js'))(callback);
});
gulp.task('t0093', (callback) => {
  require(path.resolve('archives001/task0093-restore-ip/restore-ip.js'))(callback);
});
gulp.task('t0094', (callback) => {
  require(path.resolve('archives001/task0094-bin-tree-inorder/bin-tree-inorder.js'))(callback);
});
gulp.task('t0095', (callback) => {
  require(path.resolve('archives001/task0095-unique-bst-2/unique-bst-2.js'))(callback);
});
gulp.task('t0096', (callback) => {
  require(path.resolve('archives001/task0096-unique-bst/unique-bst.js'))(callback);
});
gulp.task('t0097', (callback) => {
  require(path.resolve('archives001/task0097-interleave-str/interleave-str.js'))(callback);
});
gulp.task('t0098', (callback) => {
  require(path.resolve('archives001/task0098-valid-bst/valid-bst.js'))(callback);
});
gulp.task('t0099', (callback) => {
  require(path.resolve('archives001/task0099-restore-bst/restore-bst.js'))(callback);
});
gulp.task('t0100', (callback) => {
  require(path.resolve('archives001/task0100-same-tree/same-tree.js'))(callback);
});
gulp.task('t0101', (callback) => {
  require(path.resolve('archives002/task0101-symmetric-tree/symmetric-tree.js'))(callback);
});
gulp.task('t0102', (callback) => {
  require(path.resolve('archives002/task0102-breadth-first/breadth-first.js'))(callback);
});
gulp.task('t0103', (callback) => {
  require(path.resolve('archives002/task0103-breadth-first-zigzag/breadth-first-zigzag.js'))(callback);
});
gulp.task('t0104', (callback) => {
  require(path.resolve('archives002/task0104-max-tree-depth/max-tree-depth.js'))(callback);
});
gulp.task('t0105', (callback) => {
  require(path.resolve('archives002/task0105-tree-by-in-pre/tree-by-in-pre.js'))(callback);
});
gulp.task('t0106', (callback) => {
  require(path.resolve('archives002/task0106-tree-by-in-post/tree-by-in-post.js'))(callback);
});
gulp.task('t0107', (callback) => {
  require(path.resolve('archives002/task0107-breadth-first-reverse/breadth-first-reverse.js'))(callback);
});
gulp.task('t0108', (callback) => {
  require(path.resolve('archives002/task0108-sorted-arr-to-bst/sorted-arr-to-bst.js'))(callback);
});
gulp.task('t0109', (callback) => {
  require(path.resolve('archives002/task0109-sorted-list-to-bst/sorted-list-to-bst.js'))(callback);
});
gulp.task('t0110', (callback) => {
  require(path.resolve('archives002/task0110-balanced-tree/balanced-tree.js'))(callback);
});
gulp.task('t0111', (callback) => {
  require(path.resolve('archives002/task0111-min-tree-depth/min-tree-depth.js'))(callback);
});
gulp.task('t0112', (callback) => {
  require(path.resolve('archives002/task0112-path-sum/path-sum.js'))(callback);
});
gulp.task('t0113', (callback) => {
  require(path.resolve('archives002/task0113-path-sum-2/path-sum-2.js'))(callback);
});
gulp.task('t0114', (callback) => {
  require(path.resolve('archives002/task0114-flat-tree-to-list/flat-tree-to-list.js'))(callback);
});
gulp.task('t0115', (callback) => {
  require(path.resolve('archives002/task0115-distinct-sub/distinct-sub.js'))(callback);
});
gulp.task('t0116', (callback) => {
  require(path.resolve('archives002/task0116-tree-node-next-right/tree-node-next-right.js'))(callback);
});
gulp.task('t0117', (callback) => {
  require(path.resolve('archives002/task0117-tree-node-next-right-2/tree-node-next-right-2.js'))(callback);
});
gulp.task('t0118', (callback) => {
  require(path.resolve('archives002/task0118-pascal-triangle/pascal-triangle.js'))(callback);
});
gulp.task('t0119', (callback) => {
  require(path.resolve('archives002/task0119-pascal-triangle-2/pascal-triangle-2.js'))(callback);
});
gulp.task('t0120', (callback) => {
  require(path.resolve('archives002/task0120-triangle-min-sum/triangle-min-sum.js'))(callback);
});
gulp.task('t0121', (callback) => {
  require(path.resolve('archives002/task0121-buy-sell-stock/buy-sell-stock.js'))(callback);
});
gulp.task('t0122', (callback) => {
  require(path.resolve('archives002/task0122-buy-sell-stock-2/buy-sell-stock-2.js'))(callback);
});
gulp.task('t0123', (callback) => {
  require(path.resolve('archives002/task0123-buy-sell-stock-3/buy-sell-stock-3.js'))(callback);
});
gulp.task('t0124', (callback) => {
  require(path.resolve('archives002/task0124-max-path-sum/max-path-sum.js'))(callback);
});
gulp.task('t0125', (callback) => {
  require(path.resolve('archives002/task0125-valid-palindrome/valid-palindrome.js'))(callback);
});
gulp.task('t0126', (callback) => {
  require(path.resolve('archives002/task0126-word-ladder-2/word-ladder-2.js'))(callback);
});
gulp.task('t0127', (callback) => {
  require(path.resolve('archives002/task0127-word-ladder/word-ladder.js'))(callback);
});
gulp.task('t0128', (callback) => {
  require(path.resolve('archives002/task0128-longest-consec-seq/longest-consec-seq.js'))(callback);
});
gulp.task('t0129', (callback) => {
  require(path.resolve('archives002/task0129-sum-root-to-leaf/sum-root-to-leaf.js'))(callback);
});
gulp.task('t0130', (callback) => {
  require(path.resolve('archives002/task0130-surround-region/surround-region.js'))(callback);
});
gulp.task('t0131', (callback) => {
  require(path.resolve('archives002/task0131-palindrome-partition/palindrome-partition.js'))(callback);
});
gulp.task('t0132', (callback) => {
  require(path.resolve('archives002/task0132-palindrome-partition-2/palindrome-partition-2.js'))(callback);
});
gulp.task('t0133', (callback) => {
  require(path.resolve('archives002/task0133-clone-graph/clone-graph.js'))(callback);
});
gulp.task('t0134', (callback) => {
  require(path.resolve('archives002/task0134-gas-station/gas-station.js'))(callback);
});
gulp.task('t0135', (callback) => {
  require(path.resolve('archives002/task0135-candy/candy.js'))(callback);
});
gulp.task('t0136', (callback) => {
  require(path.resolve('archives002/task0136-single-number/single-number.js'))(callback);
});
gulp.task('t0137', (callback) => {
  require(path.resolve('archives002/task0137-single-number-2/single-number-2.js'))(callback);
});
gulp.task('t0138', (callback) => {
  require(path.resolve('archives002/task0138-copy-list-with-rnd-ptr/copy-list with-rnd-ptr.js'))(callback);
});
gulp.task('t0139', (callback) => {
  require(path.resolve('archives002/task0139-word-break/word-break.js'))(callback);
});
gulp.task('t0140', (callback) => {
  require(path.resolve('archives002/task0140-word-break-2/word-break-2.js'))(callback);
});
gulp.task('t0141', (callback) => {
  require(path.resolve('archives002/task0141-link-list-cycle/link-list-cycle.js'))(callback);
});
gulp.task('t0142', (callback) => {
  require(path.resolve('archives002/task0142-link-list-cycle-2/link-list-cycle-2.js'))(callback);
});
gulp.task('t0143', (callback) => {
  require(path.resolve('archives002/task0143-reorder-list/reorder-list.js'))(callback);
});
gulp.task('t0144', (callback) => {
  require(path.resolve('archives002/task0144-bin-tree-preorder/bin-tree-preorder.js'))(callback);
});
gulp.task('t0145', (callback) => {
  require(path.resolve('archives002/task0145-bin-tree-postorder/bin-tree-postorder.js'))(callback);
});
gulp.task('t0146', (callback) => {
  require(path.resolve('archives002/task0146-lru-cache/lru-cache.js'))(callback);
});
gulp.task('t0147', (callback) => {
  require(path.resolve('archives002/task0147-list-insertion-sort/list-insertion-sort.js'))(callback);
});
gulp.task('t0148', (callback) => {
  require(path.resolve('archives002/task0148-sort-list/sort-list.js'))(callback);
});
gulp.task('t0149', (callback) => {
  require(path.resolve('archives002/task0149-longest-line/longest-line.js'))(callback);
});
gulp.task('t0150', (callback) => {
  require(path.resolve('archives002/task0150-rev-polish-note/rev-polish-note.js'))(callback);
});
gulp.task('t0151', (callback) => {
  require(path.resolve('archives002/task0151-rev-word-in-str/rev-word-in-str.js'))(callback);
});
gulp.task('t0152', (callback) => {
  require(path.resolve('archives002/task0152-max-prod-arr/max-prod-arr.js'))(callback);
});
gulp.task('t0153', (callback) => {
  require(path.resolve('archives002/task0153-rotate-sort-arr-min/rotate-sort-arr-min.js'))(callback);
});
gulp.task('t0154', (callback) => {
  require(path.resolve('archives002/task0154-rotate-sort-arr-min-2/rotate-sort-arr-min-2.js'))(callback);
});
gulp.task('t0155', (callback) => {
  require(path.resolve('archives002/task0155-min-stack/min-stack.js'))(callback);
});
gulp.task('t0156', (callback) => {
  require(path.resolve('archives002/task0156-bin-tree-upside-down/bin-tree-upside-down.js'))(callback);
});
gulp.task('t0157', (callback) => {
  require(path.resolve('archives002/task0157-read-n-chars/read-n-chars.js'))(callback);
});
gulp.task('t0158', (callback) => {
  require(path.resolve('archives002/task0158-read-n-chars-2/read-n-chars-2.js'))(callback);
});
gulp.task('t0159', (callback) => {
  require(path.resolve('archives002/task0159-max-sub-two-dists/max-sub-two-dists.js'))(callback);
});
gulp.task('t0160', (callback) => {
  require(path.resolve('archives002/task0160-two-list-insert/two-list-insert.js'))(callback);
});
gulp.task('t0161', (callback) => {
  require(path.resolve('archives002/task0161-1-edit-dist/1-edit-dist.js'))(callback);
});
gulp.task('t0162', (callback) => {
  require(path.resolve('archives002/task0162-peak-element/peak-element.js'))(callback);
});
gulp.task('t0163', (callback) => {
  require(path.resolve('archives002/task0163-miss-ranges/miss-ranges.js'))(callback);
});
gulp.task('t0164', (callback) => {
  require(path.resolve('archives002/task0164-max-gap/max-gap.js'))(callback);
});
gulp.task('t0165', (callback) => {
  require(path.resolve('archives002/task0165-version-compare/version-compare.js'))(callback);
});
gulp.task('t0166', (callback) => {
  require(path.resolve('archives002/task0166-frac-to-recur-dec/frac-to-rec-dec.js'))(callback);
});
gulp.task('t0167', (callback) => {
  require(path.resolve('archives002/task0167-two-sum-2/two-sum-2.js'))(callback);
});
gulp.task('t0168', (callback) => {
  require(path.resolve('archives002/task0168-excel-col-title/excel-col-title.js'))(callback);
});
gulp.task('t0169', (callback) => {
  require(path.resolve('archives002/task0169-major-element/major-element.js'))(callback);
});
gulp.task('t0170', (callback) => {
  require(path.resolve('archives002/task0170-two-sum-3/two-sum-3.js'))(callback);
});
gulp.task('t0171', (callback) => {
  require(path.resolve('archives002/task0171-excel-col-number/excel-col-title.js'))(callback);
});
gulp.task('t0172', (callback) => {
  require(path.resolve('archives002/task0172-factorial-trailing-zeros/factorial-trailing-zeros.js'))(callback);
});
gulp.task('t0173', (callback) => {
  require(path.resolve('archives002/task0173-bst-iterator/bst-iterator.js'))(callback);
});
gulp.task('t0174', (callback) => {
  require(path.resolve('archives002/task0174-dungeon-game/dungeon-game.js'))(callback);
});
gulp.task('t0175', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0175-combine-tables/combine-tables.sql')).toString());callback();
});
gulp.task('t0176', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0176-2nd-high-salary/2nd-high-salary.sql')).toString());callback();
});
gulp.task('t0177', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0177-nth-high-salary/nth-high-salary.sql')).toString());callback();
});
gulp.task('t0178', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0178-rank-score/rank-score.sql')).toString());callback();
});
gulp.task('t0179', (callback) => {
  require(path.resolve('archives002/task0179-max-num/max-num.js'))(callback);
});
gulp.task('t0180', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0180-consec-nums/consec-nums.sql')).toString());callback();
});
gulp.task('t0181', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0181-employess-earn/employee-earn.sql')).toString());callback();
});
gulp.task('t0182', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0182-dup-emails/dup-emails.sql')).toString());callback();
});
gulp.task('t0183', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0183-cust-no-orders/cust-no-orders.sql')).toString());callback();
});
gulp.task('t0184', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0184-dept-high-salary/dept-high-salary.sql')).toString());callback();
});
gulp.task('t0185', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0185-dept-top-salaries/dept-top-salaries.sql')).toString());callback();
});
gulp.task('t0186', (callback) => {
  require(path.resolve('archives002/task0186-rev-word-in-str-2/rev-word-in-str-2.js'))(callback);
});
gulp.task('t0187', (callback) => {
  require(path.resolve('archives002/task0187-dna-seq/dna-seq.js'))(callback);
});
gulp.task('t0188', (callback) => {
  require(path.resolve('archives002/task0188-buy-sell-stock-4/buy-sell-stock-4.js'))(callback);
});
gulp.task('t0189', (callback) => {
  require(path.resolve('archives002/task0189-rotate-array/rotate-array.js'))(callback);
});
gulp.task('t0190', (callback) => {
  require(path.resolve('archives002/task0190-rev-bits/rev-bits.js'))(callback);
});
gulp.task('t0191', (callback) => {
  require(path.resolve('archives002/task0191-bit-1-count/bit-1-count.js'))(callback);
});
gulp.task('t0192', (callback) => {
  chp.exec(`sh ${path.resolve('archives002/task0192-word-freq/word-freq.sh')}`, (e,o)=>{ console.log(e||o); callback(e); });
});
gulp.task('t0193', (callback) => {
  chp.exec(`sh ${path.resolve('archives002/task0193-valid-num/valid-num.sh')}`, (e,o)=>{ console.log(e||o); callback(e) });
});
gulp.task('t0194', (callback) => {
  chp.exec(`sh ${path.resolve('archives002/task0194-transpose-file/transpose-file.sh')}`, (e,o)=>{ console.log(e||o); callback(e) });
});
gulp.task('t0195', (callback) => {
  chp.exec(`sh ${path.resolve('archives002/task0195-10th-line/10th-line.sh')}`, (e,o)=>{ console.log(e||o); callback(e) });
});
gulp.task('t0196', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0196-del-dup-emails/del-dup-emails.sql')).toString());callback();
});
gulp.task('t0197', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives002/task0197-raise-temp/raise-temp.sql')).toString());callback();
});
gulp.task('t0198', (callback) => {
  require(path.resolve('archives002/task0198-house-robber/house-robber.js'))(callback);
});
gulp.task('t0199', (callback) => {
  require(path.resolve('archives002/task0199-bin-tree-right-view/bin-tree-right-view.js'))(callback);
});
gulp.task('t0200', (callback) => {
  require(path.resolve('archives002/task0200-island-numbers/island-numbers.js'))(callback);
});
gulp.task('t0201', (callback) => {
  require(path.resolve('task0201-bitwise-and-nums/bitwise-and-nums.js'))(callback);
});
gulp.task('t0202', (callback) => {
  require(path.resolve('task0202-happy-num/happy-num.js'))(callback);
});
gulp.task('t0203', (callback) => {
  require(path.resolve('task0203-del-list-node/del-list-node.js'))(callback);
});
gulp.task('t0204', (callback) => {
  require(path.resolve('task0204-count-primes/count-primes.js'))(callback);
});
gulp.task('t0205', (callback) => {
  require(path.resolve('task0205-isomorphic-str/isomorphic-str.js'))(callback);
});
gulp.task('t0206', (callback) => {
  require(path.resolve('task0206-rev-link-list/rev-link-list.js'))(callback);
});
gulp.task('t0207', (callback) => {
  require(path.resolve('task0207-course-schedule/course-schedule.js'))(callback);
});
gulp.task('t0208', (callback) => {
  require(path.resolve('task0208-trie/trie.js'))(callback);
});
gulp.task('t0209', (callback) => {
  require(path.resolve('task0209-min-sub-by-sum/min-sub-by-sum.js'))(callback);
});
gulp.task('t0210', (callback) => {
  require(path.resolve('task0210-course-schedule-2/course-schedule-2.js'))(callback);
});
gulp.task('t0211', (callback) => {
  require(path.resolve('task0211-word-dict/word-dict.js'))(callback);
});
gulp.task('t0212', (callback) => {
  require(path.resolve('task0212-word-search-2/word-search-2.js'))(callback);
});
gulp.task('t0213', (callback) => {
  require(path.resolve('task0213-house-robber-2/house-robber-2.js'))(callback);
});
gulp.task('t0214', (callback) => {
  require(path.resolve('task0214-shortest-palindrome/shortest-palindrome.js'))(callback);
});
gulp.task('t0215', (callback) => {
  require(path.resolve('task0215-arr-kth-max/arr-kth-max.js'))(callback);
});
gulp.task('t0216', (callback) => {
  require(path.resolve('task0216-comb-sum-3/comb-sum-3.js'))(callback);
});
gulp.task('t0217', (callback) => {
  require(path.resolve('task0217-has-dups/has-dups.js'))(callback);
});
gulp.task('t0218', (callback) => {
  require(path.resolve('task0218-skyline/skyline.js'))(callback);
});
gulp.task('t0219', (callback) => {
  require(path.resolve('task0219-has-dups-2/has-dups-2.js'))(callback);
});
gulp.task('t0220', (callback) => {
  require(path.resolve('task0220-has-dups-3/has-dups-3.js'))(callback);
});
gulp.task('t0221', (callback) => {
  require(path.resolve('task0221-max-square/max-square.js'))(callback);
});
gulp.task('t0222', (callback) => {
  require(path.resolve('task0222-cnt-comp-tree/cnt-comp-tree.js'))(callback);
});
gulp.task('t0223', (callback) => {
  require(path.resolve('task0223-rect-area/ract-area.js'))(callback);
});
gulp.task('t0224', (callback) => {
  require(path.resolve('task0224-calculator/calculator.js'))(callback);
});
gulp.task('t0225', (callback) => {
  require(path.resolve('task0225-stack-by-queue/stack-by-queue.js'))(callback);
});
gulp.task('t0226', (callback) => {
  require(path.resolve('task0226-ivt-bin-tree/ivt-bin-tree.js'))(callback);
});
gulp.task('t0227', (callback) => {
  require(path.resolve('task0227-calculator-2/calculator-2.js'))(callback);
});
gulp.task('t0228', (callback) => {
  require(path.resolve('task0228-sum-range/sum-range.js'))(callback);
});
gulp.task('t0229', (callback) => {
  require(path.resolve('task0229-major-element-2/major-element-2.js'))(callback);
});
gulp.task('t0230', (callback) => {
  require(path.resolve('task0230-bst-kth-min/bst-kth-min.js'))(callback);
});
gulp.task('t0231', (callback) => {
  require(path.resolve('task0231-powOf2/powOf2.js'))(callback);
});
gulp.task('t0232', (callback) => {
  require(path.resolve('task0232-queue-by-stack/queue-by-stack.js'))(callback);
});
gulp.task('t0233', (callback) => {
  require(path.resolve('task0233-cnt-ones/cnt-ones.js'))(callback);
});
gulp.task('t0234', (callback) => {
  require(path.resolve('task0234-palindrome-list/palindrome-list.js'))(callback);
});
gulp.task('t0235', (callback) => {
  require(path.resolve('task0235-bst-1st-common-p/bst-1st-common-p.js'))(callback);
});
gulp.task('t0236', (callback) => {
  require(path.resolve('task0236-tree-1st-common-p/tree-1st-common-p.js'))(callback);
});
gulp.task('t0237', (callback) => {
  require(path.resolve('task0237-del-list-node-2/del-list-node-2.js'))(callback);
});
gulp.task('t0238', (callback) => {
  require(path.resolve('task0238-arr-prods/arr-prods.js'))(callback);
});
gulp.task('t0239', (callback) => {
  require(path.resolve('task0239-slide-win-max/slide-win-max.js'))(callback);
});
gulp.task('t0240', (callback) => {
  require(path.resolve('task0240-search-2d-mat-2/search-2d-mat-2.js'))(callback);
});
gulp.task('t0241', (callback) => {
  require(path.resolve('task0241-add-brackets/add-brackets.js'))(callback);
});
gulp.task('t0242', (callback) => {
  require(path.resolve('task0242-valid-anagram/valid-anagram.js'))(callback);
});
gulp.task('t0243', (callback) => {
  require(path.resolve('task0243-min-word-dist/min-word-dist.js'))(callback);
});
gulp.task('t0244', (callback) => {
  require(path.resolve('task0244-min-word-dist-2/min-word-dist-2.js'))(callback);
});
gulp.task('t0245', (callback) => {
  require(path.resolve('task0245-min-word-dist-3/min-word-dist-3.js'))(callback);
});
gulp.task('t0246', (callback) => {
  require(path.resolve('task0246-strobogrammatic/strobogrammatic.js'))(callback);
});
gulp.task('t0247', (callback) => {
  require(path.resolve('task0247-strobogrammatic-2/strobogrammatic-2.js'))(callback);
});
gulp.task('t0248', (callback) => {
  require(path.resolve('task0248-strobogrammatic-3/strobogrammatic-3.js'))(callback);
});
gulp.task('t0249', (callback) => {
  require(path.resolve('task0249-group-shift-str/group-shift-str.js'))(callback);
});
gulp.task('t0250', (callback) => {
  require(path.resolve('task0250-uni-val-sub-tree/uni-val-sub-tree.js'))(callback);
});
gulp.task('t0251', (callback) => {
  require(path.resolve('task0251-flat-2d-vect/flat-2d-vect.js'))(callback);
});
gulp.task('t0252', (callback) => {
  require(path.resolve('task0252-meeting-rooms/meeting-rooms.js'))(callback);
});
gulp.task('t0253', (callback) => {
  require(path.resolve('task0253-meeting-rooms-2/meeting-rooms-2.js'))(callback);
});
