/**
 * @param {number}      s       the sum
 * @param {number[]}    nums    the number array
 * @return {number}             length of the minimum sub array
 */
const minSubArrayLen = function(s, nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0209 - Minimum Size Subarray Sum:');
  [
    [7, [2, 3, 1, 2, 4, 3]],
  ].forEach( vs => {
    console.log(`  min=${minSubArrayLen(vs[0], vs[1])}, sum=${vs[0]}, nums=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
