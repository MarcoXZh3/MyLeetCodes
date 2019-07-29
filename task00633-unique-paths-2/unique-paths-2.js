/**
 * @param {number[][]}  obstacleGrid    the board grids
 * @return {number}                     number of unique paths
 */
const uniquePathsWithObstacles = function(obstacleGrid) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0063 - Unique Paths II:');
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
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
