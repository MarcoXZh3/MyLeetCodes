/**
 * @param {number[][]}  heightMap the height list
 * @return {number}               the rain water these height can trap
 */
const trapRainWater = function(heightMap) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0407 - Trapping Rain Water II:');
  [
    [
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(' ')}]`);
    }
    console.log(`  trap=${trapRainWater(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
