/**
 * dynamic programming 1 - O(mn) on time and O(mn) on space
 * @param {character[][]}     matrix    the 0-1 matrix
 * @return {number}                     area of the max square
 */
const maximalSquare0 = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...Array(m+1).keys()].map( _=>[...Array(n+1).keys()].map( _=>0 ) );
  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i-1][j-1] === '1') {
        dp[i][j] = 1 + Math.min(Math.min(dp[i][j-1], dp[i-1][j]), dp[i-1][j-1]);
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max * max;
};


/**
 * dynamic programming 2 - O(mn) on time and O(n) on space
 * @param {character[][]}     matrix    the 0-1 matrix
 * @return {number}                     area of the max square
 */
const maximalSquare = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...Array(n+1).keys()].map( _=>0 );
  let max = 0;
  let prev = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let tmp = dp[j];
      if (matrix[i-1][j-1] === '1') {
        dp[j] = 1 + Math.min(Math.min(dp[j-1], prev), dp[j]);
        max = Math.max(max, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = tmp;
    }
  }
  return max * max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0221 - Maximal Square:');
  [
    [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ],
    [
      ['1', '1'],
      ['1', '1'],
    ],
    [
      ['1', '0', '1', '0'],
      ['1', '0', '1', '1'],
      ['1', '0', '1', '1'],
      ['1', '1', '1', '1'],
    ],
  ].forEach( vs => {
    vs.forEach( row => console.log(row.join(' ')) );
    console.log(`  max=${maximalSquare(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
