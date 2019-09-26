/**
 * @param {number[]}  nums    the rotated number array
 * @return {number}           the minimum number in array
 */
const findMin = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0154 - Find Minimum in Rotated Sorted Array II:');
  [
    [1, 3, 5],
    [2, 2, 2, 0, 1],
  ].forEach( vs => {
    console.log(`  min=${findMin(vs)}, arr=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
