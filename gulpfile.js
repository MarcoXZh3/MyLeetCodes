const chp = require('child_process');
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const spawn = require("child_process").spawn;   // for executing Python scripts


const python = path.resolve('.venv/bin/python');

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
  require(path.resolve('archives003/task0201-bitwise-and-nums/bitwise-and-nums.js'))(callback);
});
gulp.task('t0202', (callback) => {
  require(path.resolve('archives003/task0202-happy-num/happy-num.js'))(callback);
});
gulp.task('t0203', (callback) => {
  require(path.resolve('archives003/task0203-del-list-node/del-list-node.js'))(callback);
});
gulp.task('t0204', (callback) => {
  require(path.resolve('archives003/task0204-count-primes/count-primes.js'))(callback);
});
gulp.task('t0205', (callback) => {
  require(path.resolve('archives003/task0205-isomorphic-str/isomorphic-str.js'))(callback);
});
gulp.task('t0206', (callback) => {
  require(path.resolve('archives003/task0206-rev-link-list/rev-link-list.js'))(callback);
});
gulp.task('t0207', (callback) => {
  require(path.resolve('archives003/task0207-course-schedule/course-schedule.js'))(callback);
});
gulp.task('t0208', (callback) => {
  require(path.resolve('archives003/task0208-trie/trie.js'))(callback);
});
gulp.task('t0209', (callback) => {
  require(path.resolve('archives003/task0209-min-sub-by-sum/min-sub-by-sum.js'))(callback);
});
gulp.task('t0210', (callback) => {
  require(path.resolve('archives003/task0210-course-schedule-2/course-schedule-2.js'))(callback);
});
gulp.task('t0211', (callback) => {
  require(path.resolve('archives003/task0211-word-dict/word-dict.js'))(callback);
});
gulp.task('t0212', (callback) => {
  require(path.resolve('archives003/task0212-word-search-2/word-search-2.js'))(callback);
});
gulp.task('t0213', (callback) => {
  require(path.resolve('archives003/task0213-house-robber-2/house-robber-2.js'))(callback);
});
gulp.task('t0214', (callback) => {
  require(path.resolve('archives003/task0214-shortest-palindrome/shortest-palindrome.js'))(callback);
});
gulp.task('t0215', (callback) => {
  require(path.resolve('archives003/task0215-arr-kth-max/arr-kth-max.js'))(callback);
});
gulp.task('t0216', (callback) => {
  require(path.resolve('archives003/task0216-comb-sum-3/comb-sum-3.js'))(callback);
});
gulp.task('t0217', (callback) => {
  require(path.resolve('archives003/task0217-has-dups/has-dups.js'))(callback);
});
gulp.task('t0218', (callback) => {
  require(path.resolve('archives003/task0218-skyline/skyline.js'))(callback);
});
gulp.task('t0219', (callback) => {
  require(path.resolve('archives003/task0219-has-dups-2/has-dups-2.js'))(callback);
});
gulp.task('t0220', (callback) => {
  require(path.resolve('archives003/task0220-has-dups-3/has-dups-3.js'))(callback);
});
gulp.task('t0221', (callback) => {
  require(path.resolve('archives003/task0221-max-square/max-square.js'))(callback);
});
gulp.task('t0222', (callback) => {
  require(path.resolve('archives003/task0222-cnt-comp-tree/cnt-comp-tree.js'))(callback);
});
gulp.task('t0223', (callback) => {
  require(path.resolve('archives003/task0223-rect-area/ract-area.js'))(callback);
});
gulp.task('t0224', (callback) => {
  require(path.resolve('archives003/task0224-calculator/calculator.js'))(callback);
});
gulp.task('t0225', (callback) => {
  require(path.resolve('archives003/task0225-stack-by-queue/stack-by-queue.js'))(callback);
});
gulp.task('t0226', (callback) => {
  require(path.resolve('archives003/task0226-ivt-bin-tree/ivt-bin-tree.js'))(callback);
});
gulp.task('t0227', (callback) => {
  require(path.resolve('archives003/task0227-calculator-2/calculator-2.js'))(callback);
});
gulp.task('t0228', (callback) => {
  require(path.resolve('archives003/task0228-sum-range/sum-range.js'))(callback);
});
gulp.task('t0229', (callback) => {
  require(path.resolve('archives003/task0229-major-element-2/major-element-2.js'))(callback);
});
gulp.task('t0230', (callback) => {
  require(path.resolve('archives003/task0230-bst-kth-min/bst-kth-min.js'))(callback);
});
gulp.task('t0231', (callback) => {
  require(path.resolve('archives003/task0231-powOf2/powOf2.js'))(callback);
});
gulp.task('t0232', (callback) => {
  require(path.resolve('archives003/task0232-queue-by-stack/queue-by-stack.js'))(callback);
});
gulp.task('t0233', (callback) => {
  require(path.resolve('archives003/task0233-cnt-ones/cnt-ones.js'))(callback);
});
gulp.task('t0234', (callback) => {
  require(path.resolve('archives003/task0234-palindrome-list/palindrome-list.js'))(callback);
});
gulp.task('t0235', (callback) => {
  require(path.resolve('archives003/task0235-bst-1st-common-p/bst-1st-common-p.js'))(callback);
});
gulp.task('t0236', (callback) => {
  require(path.resolve('archives003/task0236-tree-1st-common-p/tree-1st-common-p.js'))(callback);
});
gulp.task('t0237', (callback) => {
  require(path.resolve('archives003/task0237-del-list-node-2/del-list-node-2.js'))(callback);
});
gulp.task('t0238', (callback) => {
  require(path.resolve('archives003/task0238-arr-prods/arr-prods.js'))(callback);
});
gulp.task('t0239', (callback) => {
  require(path.resolve('archives003/task0239-slide-win-max/slide-win-max.js'))(callback);
});
gulp.task('t0240', (callback) => {
  require(path.resolve('archives003/task0240-search-2d-mat-2/search-2d-mat-2.js'))(callback);
});
gulp.task('t0241', (callback) => {
  require(path.resolve('archives003/task0241-add-brackets/add-brackets.js'))(callback);
});
gulp.task('t0242', (callback) => {
  require(path.resolve('archives003/task0242-valid-anagram/valid-anagram.js'))(callback);
});
gulp.task('t0243', (callback) => {
  require(path.resolve('archives003/task0243-min-word-dist/min-word-dist.js'))(callback);
});
gulp.task('t0244', (callback) => {
  require(path.resolve('archives003/task0244-min-word-dist-2/min-word-dist-2.js'))(callback);
});
gulp.task('t0245', (callback) => {
  require(path.resolve('archives003/task0245-min-word-dist-3/min-word-dist-3.js'))(callback);
});
gulp.task('t0246', (callback) => {
  require(path.resolve('archives003/task0246-strobogrammatic/strobogrammatic.js'))(callback);
});
gulp.task('t0247', (callback) => {
  require(path.resolve('archives003/task0247-strobogrammatic-2/strobogrammatic-2.js'))(callback);
});
gulp.task('t0248', (callback) => {
  require(path.resolve('archives003/task0248-strobogrammatic-3/strobogrammatic-3.js'))(callback);
});
gulp.task('t0249', (callback) => {
  require(path.resolve('archives003/task0249-group-shift-str/group-shift-str.js'))(callback);
});
gulp.task('t0250', (callback) => {
  require(path.resolve('archives003/task0250-uni-val-sub-tree/uni-val-sub-tree.js'))(callback);
});
gulp.task('t0251', (callback) => {
  require(path.resolve('archives003/task0251-flat-2d-vect/flat-2d-vect.js'))(callback);
});
gulp.task('t0252', (callback) => {
  require(path.resolve('archives003/task0252-meeting-rooms/meeting-rooms.js'))(callback);
});
gulp.task('t0253', (callback) => {
  require(path.resolve('archives003/task0253-meeting-rooms-2/meeting-rooms-2.js'))(callback);
});
gulp.task('t0254', (callback) => {
  require(path.resolve('archives003/task0254-factor-comb/factor-comb.js'))(callback);
});
gulp.task('t0255', (callback) => {
  require(path.resolve('archives003/task0255-verify-bst-preorder/verify-bst-preorder.js'))(callback);
});
gulp.task('t0256', (callback) => {
  require(path.resolve('archives003/task0256-paint-house/paint-house.js'))(callback);
});
gulp.task('t0257', (callback) => {
  require(path.resolve('archives003/task0257-bin-tree-paths/bin-tree-paths.js'))(callback);
});
gulp.task('t0258', (callback) => {
  require(path.resolve('archives003/task0258-add-digit/add-digit.js'))(callback);
});
gulp.task('t0259', (callback) => {
  require(path.resolve('archives003/task0259-3sum-smaller/3sum-smaller.js'))(callback);
});
gulp.task('t0260', (callback) => {
  require(path.resolve('archives003/task0260-single-num-3/single-num-3.js'))(callback);
});
gulp.task('t0261', (callback) => {
  require(path.resolve('archives003/task0261-graph-valid-tree/graph-valid-tree.js'))(callback);
});
gulp.task('t0262', (callback) => {
  console.log(fs.readFileSync(path.resolve('archives003/task0262-trips-users/trips-users.sql')).toString());callback();
});
gulp.task('t0263', (callback) => {
  require(path.resolve('archives003/task0263-ugly-num/ugly-num.js'))(callback);
});
gulp.task('t0264', (callback) => {
  require(path.resolve('archives003/task0264-ugly-num-2/ugly-num-2.js'))(callback);
});
gulp.task('t0265', (callback) => {
  require(path.resolve('archives003/task0265-paint-house-2/paint-house-2.js'))(callback);
});
gulp.task('t0266', (callback) => {
  require(path.resolve('archives003/task0266-padlind-perm/palind-perm.js'))(callback);
});
gulp.task('t0267', (callback) => {
  require(path.resolve('archives003/task0267-padlind-perm-2/palind-perm-2.js'))(callback);
});
gulp.task('t0268', (callback) => {
  require(path.resolve('archives003/task0268-missing-num/missing-num.js'))(callback);
});
gulp.task('t0269', (callback) => {
  require(path.resolve('archives003/task0269-alien-dict/alien-dict.js'))(callback);
});
gulp.task('t0270', (callback) => {
  require(path.resolve('archives003/task0270-closest-bst/closet-bst.js'))(callback);
});
gulp.task('t0271', (callback) => {
  require(path.resolve('archives003/task0271-enc-dec-str/enc-dec-str.js'))(callback);
});
gulp.task('t0272', (callback) => {
  require(path.resolve('archives003/task0272-closest-bst-2/closet-bst-2.js'))(callback);
});
gulp.task('t0273', (callback) => {
  require(path.resolve('archives003/task0273-int-to-words/int-to-words.js'))(callback);
});
gulp.task('t0274', (callback) => {
  require(path.resolve('archives003/task0274-h-index/h-index.js'))(callback);
});
gulp.task('t0275', (callback) => {
  require(path.resolve('archives003/task0275-h-index-2/h-index-2.js'))(callback);
});
gulp.task('t0276', (callback) => {
  require(path.resolve('archives003/task0276-paint-fence/paint-fence.js'))(callback);
});
gulp.task('t0277', (callback) => {
  require(path.resolve('archives003/task0277-find-celebrity/find-celebrity.js'))(callback);
});
gulp.task('t0278', (callback) => {
  require(path.resolve('archives003/task0278-1st-bad-ver/1st-bad-ver.js'))(callback);
});
gulp.task('t0279', (callback) => {
  require(path.resolve('archives003/task0279-perfect-square/perfect-square.js'))(callback);
});
gulp.task('t0280', (callback) => {
  require(path.resolve('archives003/task0280-wiggle-sort/wiggle-sort.js'))(callback);
});
gulp.task('t0281', (callback) => {
  require(path.resolve('archives003/task0281-zigzag-itr/zigzag-itr.js'))(callback);
});
gulp.task('t0282', (callback) => {
  require(path.resolve('archives003/task0282-exp-and-op/exp-and-op.js'))(callback);
});
gulp.task('t0283', (callback) => {
  require(path.resolve('archives003/task0283-move-zeros/move-zeros.js'))(callback);
});
gulp.task('t0284', (callback) => {
  require(path.resolve('archives003/task0284-itr-peek/itr-peek.js'))(callback);
});
gulp.task('t0285', (callback) => {
  require(path.resolve('archives003/task0285-bst-inorder-next/bst-inorder-next.js'))(callback);
});
gulp.task('t0286', (callback) => {
  require(path.resolve('archives003/task0286-walls-and-gates/walls-and-gates.js'))(callback);
});
gulp.task('t0287', (callback) => {
  require(path.resolve('archives003/task0287-find-arr-dup/find-arr-dup.js'))(callback);
});
gulp.task('t0288', (callback) => {
  require(path.resolve('archives003/task0288-unique-abbr/unique-abbr.js'))(callback);
});
gulp.task('t0289', (callback) => {
  require(path.resolve('archives003/task0289-life-game/life-game.js'))(callback);
});
gulp.task('t0290', (callback) => {
  require(path.resolve('archives003/task0290-word-pattern/word-pattern.js'))(callback);
});
gulp.task('t0291', (callback) => {
  require(path.resolve('archives003/task0291-word-pattern-2/word-pattern-2.js'))(callback);
});
gulp.task('t0292', (callback) => {
  require(path.resolve('archives003/task0292-nim-game/nim-game.js'))(callback);
});
gulp.task('t0293', (callback) => {
  require(path.resolve('archives003/task0293-flip-game/flip-game.js'))(callback);
});
gulp.task('t0294', (callback) => {
  require(path.resolve('archives003/task0294-flip-game-2/flip-game-2.js'))(callback);
});
gulp.task('t0295', (callback) => {
  require(path.resolve('archives003/task0295-stream-median/stream-median.js'))(callback);
});
gulp.task('t0296', (callback) => {
  require(path.resolve('archives003/task0296-best-meet-point/best-meet-point.js'))(callback);
});
gulp.task('t0297', (callback) => {
  require(path.resolve('archives003/task0297-tree-seri-dese/tree-seri-dese.js'))(callback);
});
gulp.task('t0298', (callback) => {
  require(path.resolve('archives003/task0298-tree-max-cons/tree-max-cons.js'))(callback);
});
gulp.task('t0299', (callback) => {
  require(path.resolve('archives003/task0299-bulls-cows/bulls-cows.js'))(callback);
});
gulp.task('t0300', (callback) => {
  require(path.resolve('archives003/task0300-max-asc-seq/max-asc-seq.js'))(callback);
});
gulp.task('t0301', (callback) => {
  require(path.resolve('archives004/task0301-del-invalid-brackets/del-invalid-brackets.js'))(callback);
});
gulp.task('t0302', (callback) => {
  require(path.resolve('archives004/task0302-blk-px-min-rect/blk-px-min-rect.js'))(callback);
});
gulp.task('t0303', (callback) => {
  require(path.resolve('archives004/task0303-range-sum/range-sum.js'))(callback);
});
gulp.task('t0304', (callback) => {
  require(path.resolve('archives004/task0304-range-sum-2d/range-sum-2d.js'))(callback);
});
gulp.task('t0305', (callback) => {
  require(path.resolve('archives004/task0305-island-numbers-2/island-numbers-2.js'))(callback);
});
gulp.task('t0306', (callback) => {
  require(path.resolve('archives004/task0306-additive-num/additive-num.js'))(callback);
});
gulp.task('t0307', (callback) => {
  require(path.resolve('archives004/task0307-range-sum-mutable/range-sum-mutable.js'))(callback);
});
gulp.task('t0308', (callback) => {
  require(path.resolve('archives004/task0308-range-sum-2d-mutable/range-sum-2d-mutable.js'))(callback);
});
gulp.task('t0309', (callback) => {
  require(path.resolve('archives004/task0309-buy-sell-stock-cooldown/buy-sell-stock-cooldown.js'))(callback);
});
gulp.task('t0310', (callback) => {
  require(path.resolve('archives004/task0310-min-height-trees/min-height-trees.js'))(callback);
});
gulp.task('t0311', (callback) => {
  require(path.resolve('archives004/task0311-sparse-mat-multiply/sparse-mat-multiply.js'))(callback);
});
gulp.task('t0312', (callback) => {
  require(path.resolve('archives004/task0312-burst-balloons/burst-balloons.js'))(callback);
});
gulp.task('t0313', (callback) => {
  require(path.resolve('archives004/task0313-super-ugly-num/super-ugly-num.js'))(callback);
});
gulp.task('t0314', (callback) => {
  require(path.resolve('archives004/task0314-tree-vert-traversal/tree-vert-traversal.js'))(callback);
});
gulp.task('t0315', (callback) => {
  require(path.resolve('archives004/task0315-smaller-num-cnt/smaller-num-cnt.js'))(callback);
});
gulp.task('t0316', (callback) => {
  require(path.resolve('archives004/task0316-del-dup-letters/del-dup-letters.js'))(callback);
});
gulp.task('t0317', (callback) => {
  require(path.resolve('archives004/task0317-buildings-min-dist/buildings-min-dist.js'))(callback);
});
gulp.task('t0318', (callback) => {
  require(path.resolve('archives004/task0318-word-lengths-max-prod/word-lengths-max-prod.js'))(callback);
});
gulp.task('t0319', (callback) => {
  require(path.resolve('archives004/task0319-bulb-switcher/bulb-switcher.js'))(callback);
});
gulp.task('t0320', (callback) => {
  require(path.resolve('archives004/task0320-generalized-abbr/generalized-abbr.js'))(callback);
});
gulp.task('t0321', (callback) => {
  require(path.resolve('archives004/task0321-gen-max-num/gen-max-num.js'))(callback);
});
gulp.task('t0322', (callback) => {
  require(path.resolve('archives004/task0322-coin-change/coin-change.js'))(callback);
});
gulp.task('t0323', (callback) => {
  require(path.resolve('archives004/task0323-graph-connected-nodes/graph-connected-nodes.js'))(callback);
});
gulp.task('t0324', (callback) => {
  require(path.resolve('archives004/task0324-wiggle-sort-2/wiggle-sort-2.js'))(callback);
});
gulp.task('t0325', (callback) => {
  require(path.resolve('archives004/task0325-max-subarray-sum/max-subarray-sum.js'))(callback);
});
gulp.task('t0326', (callback) => {
  require(path.resolve('archives004/task0326-pow3/pow3.js'))(callback);
});
gulp.task('t0327', (callback) => {
  require(path.resolve('archives004/task0327-range-sum-cnt/range-sum-cnt.js'))(callback);
});
gulp.task('t0328', (callback) => {
  require(path.resolve('archives004/task0328-odd-even-link-list/odd-even-link-list.js'))(callback);
});
gulp.task('t0329', (callback) => {
  require(path.resolve('archives004/task0329-matrix-max-increase/matrix-max-increase.js'))(callback);
});
gulp.task('t0330', (callback) => {
  require(path.resolve('archives004/task0330-patch-arr/patch-arr.js'))(callback);
});
gulp.task('t0331', (callback) => {
  require(path.resolve('archives004/task0331-bin-tree-preorder-verify/bin-tree-preorder-verify.js'))(callback);
});
gulp.task('t0332', (callback) => {
  require(path.resolve('archives004/task0332-reconstruct-itinerary/reconstruct-itinerary.js'))(callback);
});
gulp.task('t0333', (callback) => {
  require(path.resolve('archives004/task0333-max-sub-bst/max-sub-bst.js'))(callback);
});
gulp.task('t0334', (callback) => {
  require(path.resolve('archives004/task0334-increase-sub-arr/increase-sub-arr.js'))(callback);
});
gulp.task('t0335', (callback) => {
  require(path.resolve('archives004/task0335-self-cross/self-cross.js'))(callback);
});
gulp.task('t0336', (callback) => {
  require(path.resolve('archives004/task0336-palindrome-pairs/palindrome-pairs.js'))(callback);
});
gulp.task('t0337', (callback) => {
  require(path.resolve('archives004/task0337-house-robber-3/house-robber-3.js'))(callback);
});
gulp.task('t0338', (callback) => {
  require(path.resolve('archives004/task0338-count-bits/count-bits.js'))(callback);
});
gulp.task('t0339', (callback) => {
  require(path.resolve('archives004/task0339-nested-list-weight-sum/nested-list-weight-sum.js'))(callback);
});
gulp.task('t0340', (callback) => {
  require(path.resolve('archives004/task0340-k-distinct-max-sub/k-distinct-max-sub.js'))(callback);
});
gulp.task('t0341', (callback) => {
  require(path.resolve('archives004/task0341-flat-nest-list-itr/flat-nest-list-itr.js'))(callback);
});
gulp.task('t0342', (callback) => {
  require(path.resolve('archives004/task0342-pow4/pow4.js'))(callback);
});
gulp.task('t0343', (callback) => {
  require(path.resolve('archives004/task0343-int-break/int-break.js'))(callback);
});
gulp.task('t0344', (callback) => {
  require(path.resolve('archives004/task0344-reverse-string/reverse-string.js'))(callback);
});
gulp.task('t0345', (callback) => {
  require(path.resolve('archives004/task0345-reverse-vowels/reverse-vowels.js'))(callback);
});
gulp.task('t0346', (callback) => {
  require(path.resolve('archives004/task0346-stream-move-avg/stream-move-avg.js'))(callback);
});
gulp.task('t0347', (callback) => {
  require(path.resolve('archives004/task0347-k-most-freq-elem/k-most-freq-elem.js'))(callback);
});
gulp.task('t0348', (callback) => {
  require(path.resolve('archives004/task0348-tic-tac-toe/tic-tac-toe.js'))(callback);
});
gulp.task('t0349', (callback) => {
  require(path.resolve('archives004/task0349-arr-intersection/array-intersection.js'))(callback);
});
gulp.task('t0350', (callback) => {
  require(path.resolve('archives004/task0350-arr-intersection-2/array-intersection-2.js'))(callback);
});
gulp.task('t0351', (callback) => {
  require(path.resolve('archives004/task0351-unlock-patterns/unlock-patterns.js'))(callback);
});
gulp.task('t0352', (callback) => {
  require(path.resolve('archives004/task0352-stream-disjoint-itv/stream-disjoint-itv.js'))(callback);
});
gulp.task('t0353', (callback) => {
  require(path.resolve('archives004/task0353-snake-game/snake-game.js'))(callback);
});
gulp.task('t0354', (callback) => {
  require(path.resolve('archives004/task0354-russian-doll/russian-doll.js'))(callback);
});
gulp.task('t0355', (callback) => {
  require(path.resolve('archives004/task0355-design-twitter/design-twitter.js'))(callback);
});
gulp.task('t0356', (callback) => {
  require(path.resolve('archives004/task0356-line-reflection/line-reflection.js'))(callback);
});
gulp.task('t0357', (callback) => {
  require(path.resolve('archives004/task0357-unique-digit-nums/unique-digit-nums.js'))(callback);
});
gulp.task('t0358', (callback) => {
  require(path.resolve('archives004/task0358-str-k-dist-apart/str-k-dist-apart.js'))(callback);
});
gulp.task('t0359', (callback) => {
  require(path.resolve('archives004/task0359-limit-log-rate/limit-log-rate.js'))(callback);
});
gulp.task('t0360', (callback) => {
  require(path.resolve('archives004/task0360-transformed-arr-sort/transformed-arr-sort.js'))(callback);
});
gulp.task('t0361', (callback) => {
  require(path.resolve('archives004/task0361-bomb-enemy/bomb-enemy.js'))(callback);
});
gulp.task('t0362', (callback) => {
  require(path.resolve('archives004/task0362-hit-counter/hit-counter.js'))(callback);
});
gulp.task('t0363', (callback) => {
  require(path.resolve('archives004/task0363-rect-max-sum/rect-max-sum.js'))(callback);
});
gulp.task('t0364', (callback) => {
  require(path.resolve('archives004/task0364-nested-list-weight-sum-2/nested-list-weight-sum-2.js'))(callback);
});
gulp.task('t0365', (callback) => {
  require(path.resolve('archives004/task0365-water-jug/water-jug.js'))(callback);
});
gulp.task('t0366', (callback) => {
  require(path.resolve('archives004/task0366-bin-tree-leaves/bin-tree-leaves.js'))(callback);
});
gulp.task('t0367', (callback) => {
  require(path.resolve('archives004/task0367-perfect-square/perfect-square.js'))(callback);
});
gulp.task('t0368', (callback) => {
  require(path.resolve('archives004/task0368-max-divisible-sub/max-divisible-sub.js'))(callback);
});
gulp.task('t0369', (callback) => {
  require(path.resolve('archives004/task0369-plus-1-list/plus-1-list.js'))(callback);
});
gulp.task('t0370', (callback) => {
  require(path.resolve('archives004/task0370-range-addition/range-addition.js'))(callback);
});
gulp.task('t0371', (callback) => {
  require(path.resolve('archives004/task0371-sum-2-int/sum-2-int.js'))(callback);
});
gulp.task('t0372', (callback) => {
  require(path.resolve('archives004/task0372-super-pow/super-pow.js'))(callback);
});
gulp.task('t0373', (callback) => {
  require(path.resolve('archives004/task0373-k-pairs-min-sum/k-pairs-min-sum.js'))(callback);
});
gulp.task('t0374', (callback) => {
  spawn(python, [path.resolve('archives004/task0374-guess-number/guess-number.py')]).stdout.on('data', (data) => { console.log(data.toString().trim());callback();});
});
gulp.task('t0375', (callback) => {
  require(path.resolve('archives004/task0375-guess-number-2/guess-number-2.js'))(callback);
});
gulp.task('t0376', (callback) => {
  require(path.resolve('archives004/task0376-wiggle-seq/wiggle-seq.js'))(callback);
});
gulp.task('t0377', (callback) => {
  require(path.resolve('archives004/task0377-comb-sum-4/comb-sum-4.js'))(callback);
});
gulp.task('t0378', (callback) => {
  require(path.resolve('archives004/task0378-sort-mat-kth-min/sort-mat-kth-min.js'))(callback);
});
gulp.task('t0379', (callback) => {
  require(path.resolve('archives004/task0379-phone-dict/phone-dict.js'))(callback);
});
gulp.task('t0380', (callback) => {
  require(path.resolve('archives004/task0380-o1-add-del-rand/o1-add-del-rand.js'))(callback);
});
gulp.task('t0381', (callback) => {
  require(path.resolve('archives004/task0381-o1-add-del-rand-2/o1-add-del-rand-2.js'))(callback);
});
gulp.task('t0382', (callback) => {
  require(path.resolve('archives004/task0382-list-rand-node/list-rand-node.js'))(callback);
});
gulp.task('t0383', (callback) => {
  require(path.resolve('archives004/task0383-ransom-note/ransom-note.js'))(callback);
});
gulp.task('t0384', (callback) => {
  require(path.resolve('archives004/task0384-shuffle-arr/shuffle-arr.js'))(callback);
});
gulp.task('t0385', (callback) => {
  require(path.resolve('archives004/task0385-mini-parser/mini-parser.js'))(callback);
});
gulp.task('t0386', (callback) => {
  require(path.resolve('archives004/task0386-lexico-num/lexico-num.js'))(callback);
});
gulp.task('t0387', (callback) => {
  require(path.resolve('archives004/task0387-str-1st-unique-char/str-1st-unique-char.js'))(callback);
});
gulp.task('t0388', (callback) => {
  require(path.resolve('archives004/task0388-max-abs-path/max-abs-path.js'))(callback);
});
gulp.task('t0389', (callback) => {
  require(path.resolve('archives004/task0389-extra-char/extra-char.js'))(callback);
});
gulp.task('t0390', (callback) => {
  require(path.resolve('archives004/task0390-elimination-game/elimination-game.js'))(callback);
});
gulp.task('t0391', (callback) => {
  require(path.resolve('archives004/task0391-perfect-rect/perfect-rect.js'))(callback);
});
gulp.task('t0392', (callback) => {
  require(path.resolve('archives004/task0392-is-subseq/is-subseq.js'))(callback);
});
gulp.task('t0393', (callback) => {
  require(path.resolve('archives004/task0393-valid-utf8/valid-utf8.js'))(callback);
});
gulp.task('t0394', (callback) => {
  require(path.resolve('archives004/task0394-decode-str/decode-str.js'))(callback);
});
gulp.task('t0395', (callback) => {
  require(path.resolve('archives004/task0395-max-sub-k-dups/max-sub-k-dups.js'))(callback);
});
gulp.task('t0396', (callback) => {
  require(path.resolve('archives004/task0396-rotate-func/rotate-func.js'))(callback);
});
gulp.task('t0397', (callback) => {
  require(path.resolve('archives004/task0397-replace-int/replace-int.js'))(callback);
});
gulp.task('t0398', (callback) => {
  require(path.resolve('archives004/task0398-rand-idx/rand-idx.js'))(callback);
});
gulp.task('t0399', (callback) => {
  require(path.resolve('archives004/task0399-eval-division/eval-division.js'))(callback);
});
gulp.task('t0400', (callback) => {
  require(path.resolve('archives004/task0400-nth-digit/nth-digit.js'))(callback);
});
gulp.task('t0401', (callback) => {
  require(path.resolve('task0401-binary-watch/binary-watch.js'))(callback);
});
gulp.task('t0402', (callback) => {
  require(path.resolve('task0402-del-k-digits/del-k-digits.js'))(callback);
});
gulp.task('t0403', (callback) => {
  require(path.resolve('task0403-frog-jump/frog-jump.js'))(callback);
});
gulp.task('t0404', (callback) => {
  require(path.resolve('task0404-left-leaves-sum/left-leaves-sum.js'))(callback);
});
gulp.task('t0405', (callback) => {
  require(path.resolve('task0405-num-to-hex/num-to-hex.js'))(callback);
});
gulp.task('t0406', (callback) => {
  require(path.resolve('task0406-queue-by-height/queue-by-height.js'))(callback);
});
gulp.task('t0407', (callback) => {
  require(path.resolve('task0407-trap-rain-2/trap-rain-2.js'))(callback);
});
gulp.task('t0408', (callback) => {
  require(path.resolve('task0408-word-abbr/word-abbr.js'))(callback);
});
gulp.task('t0409', (callback) => {
  require(path.resolve('task0409-max-palindrome/max-palindrome.js'))(callback);
});
gulp.task('t0410', (callback) => {
  require(path.resolve('task0410-arr-max-sum/arr-max-sum.js'))(callback);
});
gulp.task('t0411', (callback) => {
  require(path.resolve('task0411-min-unique-word-abbr/min-unique-word-abbr.js'))(callback);
});
gulp.task('t0412', (callback) => {
  require(path.resolve('task0412-fizz-buzz/fizz-buzz.js'))(callback);
});
gulp.task('t0413', (callback) => {
  require(path.resolve('task0413-arith-slice/arith-slice.js'))(callback);
});
gulp.task('t0414', (callback) => {
  require(path.resolve('task0414-3rd-max-num/3rd-max-num.js'))(callback);
});
gulp.task('t0415', (callback) => {
  require(path.resolve('task0415-add-strings/add-strings.js'))(callback);
});
gulp.task('t0416', (callback) => {
  require(path.resolve('task0416-equal-sub-set/equal-sub-set.js'))(callback);
});
gulp.task('t0417', (callback) => {
  require(path.resolve('task0417-water-flow/water-flow.js'))(callback);
});
gulp.task('t0418', (callback) => {
  require(path.resolve('task0418-sentence-fitting/sentence-fitting.js'))(callback);
});
gulp.task('t0419', (callback) => {
  require(path.resolve('task0419-ship-board/ship-board.js'))(callback);
});
gulp.task('t0420', (callback) => {
  require(path.resolve('task0420-strong-pass-check/strong-pass-check.js'))(callback);
});
gulp.task('t0421', (callback) => {
  require(path.resolve('task0421-arr-max-xor/arr-max-xor.js'))(callback);
});
gulp.task('t0422', (callback) => {
  require(path.resolve('task0422-valid-word-square/valid-word-square.js'))(callback);
});
gulp.task('t0423', (callback) => {
  require(path.resolve('task0423-words-to-nums/words-to-nums.js'))(callback);
});
gulp.task('t0424', (callback) => {
  require(path.resolve('task0424-max-dup-chars/max-dup-chars.js'))(callback);
});
