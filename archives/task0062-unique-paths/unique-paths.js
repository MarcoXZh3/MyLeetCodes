/**
 * recursion
 * @param {number}    m   rows of the board
 * @param {number}    n   columns of the board
 * @return {number}       number of unique paths
 */
const uniquePaths0 = function(m, n) {
  // 1 row/column: 1 path available
  if (m === 1 || n === 1) {
    return 1;
  }

  // 2 rows(columns): number of columns(rows) is the available paths
  if (m === 2 || n === 2) {
    return m === 2 ? n : m;
  }

  // more than 2 rows/columns: shrink
  let cnt = 0;
  const max = m > n ? m : n;
  for (let i = 0; i < max; i++) {
    cnt += uniquePaths(max === m ? m - i: m - 1, max === m ? n - 1 : n - i);
  }
  return cnt;
};


/**
 * ultimate version of dynamic programming
 * @param {number}    m   rows of the board
 * @param {number}    n   columns of the board
 * @return {number}       number of unique paths
 */
const uniquePaths1 = function(m, n) {
  // for 1 row(colum), always 1 path no matter how many columns(rows)
  const dp = Array(n).fill(1);
  // paths(m, n) = paths(m-1, n) + paths(m, n-1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  return dp[n - 1];
};


/**
 * to reach end, total steps will be N = m + n - 2, and moving downwards will be
 * k = m - 1. So the result will be Combination(N, k)
 * @param {number}    m   rows of the board
 * @param {number}    n   columns of the board
 * @return {number}       number of unique paths
 */
const uniquePaths = function(m, n) {
  let steps = n + m - 2;
  let downs = m - 1;
  let re = 1;
  for (let i = 1; i <= downs; i++) {
    re *= (steps - downs + i) / i;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0062 - Unique Paths:');
  [
    [3, 2],
    [7, 3],
    [1, 10],
  ].forEach( vs => {
    console.log(`  m=${vs[0]}, n=${vs[1]}, re=${uniquePaths(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
