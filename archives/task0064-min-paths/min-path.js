/**
 * @param {number[][]}    grid    the board grids
 * @return {number}               the minimum path
 */
const minPathSum = function(grid) {
  if (!grid || !grid[0].length === 0) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const dp = [...Array(m).keys()].map( _=>[...Array(n).keys()].map( _=>0 ));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let min0 = i === m - 1 && j === n - 1 ? 0 : Number.MAX_SAFE_INTEGER;
      if (i + 1 < m) {
        min0 = min0 < dp[i + 1][j] ? min0 : dp[i + 1][j];
      }
      if (j + 1 < n) {
        min0 = min0 < dp[i][j + 1] ? min0 : dp[i][j + 1];
      }
      dp[i][j] += min0 + grid[i][j];
    }
  }
  return dp[0][0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0064 - Minimum Path Sum:');
  [
    [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  min=${minPathSum(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
