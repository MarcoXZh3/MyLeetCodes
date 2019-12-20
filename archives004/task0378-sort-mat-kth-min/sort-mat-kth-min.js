/**
 * @param {number[][]}      matrix    the matrix
 * @param {number}          k         the kth max
 * @return {number}                   the target number
 */
const kthSmallest = function(matrix, k) {
  let n = matrix.length;
  let l = matrix[0][0];
  let r = matrix[n - 1][n - 1] + 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    let cnt = 0;
    let j = n - 1;
    for (let i = 0; i < n; i ++) {
      while (j >= 0 && matrix[i][j] > m) {
        j --;
      }
      cnt += j + 1;
    }
    cnt < k ? l = m + 1 : r = m;
  }
  return l;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0378 - Kth Smallest Element in a Sorted Matrix:');
  [
    [
      [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
      ], 8,
    ],
  ].forEach( vs => {
    vs[0].forEach( row => {
      console.log(`  ${row.join(' ')}`);
    })
    console.log(`  target=${vs[1]}, re=${kthSmallest(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
