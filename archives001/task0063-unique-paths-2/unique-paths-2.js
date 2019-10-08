/**
 * basic dynamic programming: O(m x n)
 * @param {number[][]}  board   the board grids
 * @return {number}             number of unique paths
 */
const uniquePathsWithObstacles0 = function(board) {
  if (!board || board.length === 0) {
    return 0;
  }
  const m = board.length;
  const n = board[0].length;
  // initialize the empty dp array
  const dp = [...Array(m).keys()].map( _=>[...Array(n).keys()].map( _=>0 ));
  // fill in the dp array from end to start
  dp[m - 1][n - 1] = board[m - 1][n - 1] ? 0 : 1; // end point
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (board[i][j]) {    // if an obstacle, then no result at all
        continue ;
      }
      if (i + 1 < m) {
        dp[i][j] += dp[i + 1][j];
      }
      if (j + 1 < n) {
        dp[i][j] += dp[i][j + 1];
      }
    }
  }
  return dp[0][0];
};


/**
 * advanced dynamic programming: O(n)
 * @param {number[][]}  board   the board grids
 * @return {number}             number of unique paths
 */
const uniquePathsWithObstacles = function(board) {
  if (!board || board.length === 0) {
    return 0;
  }
  const n = board[0].length;
  // initialize the empty dp array
  const dp = Array(n).fill(0);
  // fill in the dp array from end to start
  dp[n - 1] = board[board.length - 1][n - 1] ? 0 : 1; // end point
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (board[i][j]) {    // if an obstacle, then no result at all
        dp[j] = 0;
      } else if (j + 1 < n) {
        dp[j] += dp[j + 1];
      }
    }
  }
  return dp[0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0063 - Unique Paths II:');
  [
    [
      [0],
    ],
    [
      [1],
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
      [1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
      [0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
      [0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0],
      [1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0],
      [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0],
      [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1],
      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0],
      [0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0],
      [0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1],
      [1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1],
      [0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1],
      [1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1],
      [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  n=${uniquePathsWithObstacles(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
