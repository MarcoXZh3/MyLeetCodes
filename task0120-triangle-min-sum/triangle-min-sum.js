/**
 * dynamic programming
 * @param {number[][]}  triangle  the triangle of numbers
 * @return {number}               the minimum sum
 */
const minimumTotal = function(triangle) {
  const dp = Array(triangle.length + 1).fill(0);
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j+1]) + triangle[i][j];
    }
  }
  return dp[0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0120 - Minimum Sum in Triangle:');
  [
    [
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3],
    ],
    [
      [-1],
      [3, 2],
      [-3, 1, -1],
    ],
    [
      [7],
      [-5, 9],
      [6, 5, 2],
      [-8, -2, -7, 3],
      [-2, 6, -6,-1, 4],
    ]
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  min=${minimumTotal(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
