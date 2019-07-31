/**
 * @param {number[][]}    grid    the board grids
 * @return {number}               the minimum path
 */
const minPathSum = function(grid) {

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
