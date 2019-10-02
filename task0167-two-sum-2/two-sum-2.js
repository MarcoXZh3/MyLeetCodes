/**
 * @param {number[]}    numbers   the number array
 * @param {number}      target    the target sum
 * @return {number[]}             (1-based) indexes of the target values
 */
const twoSum = function(numbers, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0167 - Two Sum II - Input array is sorted:');
  [
    [[2,7,11,15], 9],
  ].forEach( vs => {
    console.log(`  sum=${vs[1]}, idxs=[${twoSum(vs[0], vs[1])}], nums=[${vs[0].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
