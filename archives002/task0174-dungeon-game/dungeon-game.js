/**
 * @param {number[][]}    dungeon   the 2D array of the dungeon
 * @return {number}                 minimum health to pass the dungeon
 */
const calculateMinimumHP = function(dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  const dp = [...Array(m + 1).keys()].map(_=>[...Array(n + 1).keys()].map(_=>Number.MAX_SAFE_INTEGER));
  dp[m][n - 1] = 1;
  dp[m - 1][n] = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const hp = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
      dp[i][j] = hp <= 0 ? 1 : hp;
    }
  }
  return dp[0][0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0174 - Dungeon Game:');
  [
    [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(row.join('\t'));
    });
    console.log(`  min=${calculateMinimumHP(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
