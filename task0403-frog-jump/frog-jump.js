/**
 * @param {number[]}    stones    distances of each stone
 * @return {boolean}              whether the frog can jump over or not
 */
const canCross = function(stones) {
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0403 - Frog Jump:');
  [
    [0, 1, 3, 5, 6, 8, 12, 17],
    [0, 1, 2, 3, 4, 8, 9, 11],
  ].forEach( vs => {
    console.log(`  cross=${canCross(vs)}, stones=[${vs}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
