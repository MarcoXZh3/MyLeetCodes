/**
 * @param {number[][]}    matrix      the number matrix
 * @return {number}                   the length of the longest increase path
 */
const longestIncreasingPath = function(matrix) {
  const dfs = (i, j) => {
    if (dp[i][j]) {
      return dp[i][j];
    }
    let max = 1;
    for (let dir of dirs) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) {
        continue ;
      }
      max = Math.max(max, 1 + dfs(x, y));
    }
    dp[i][j] = max;
    return max;
  };

  if (!matrix || matrix.length === 0) {
    return 0;
  }
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...Array(m).keys()].map( _=>[...Array(n).keys()].map( _=>0 ) );
  let max = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0329 - Longest Increasing Path in a Matrix:');
  [
    [ [9, 9, 4], [6, 6, 8], [2, 1, 1] ],
    [ [3, 4, 5], [3, 2, 6], [2, 2, 1] ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
      [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
      [59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
      [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      [79, 78, 77, 76, 75, 74, 73, 72, 71, 70],
      [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
      [99, 98, 97, 96, 95, 94, 93, 92, 91, 90],
      [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
      [119, 118, 117, 116, 115, 114, 113, 112, 111, 110],
      [120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
      [139, 138, 137, 136, 135, 134, 133, 132, 131, 130],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  max=${longestIncreasingPath(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
