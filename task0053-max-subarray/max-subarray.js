/**
 * @param {number[]}  nums    the number array
 * @return {number}           sum of the max sub-array
 */
const maxSubArray = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0053 - Maximum Subarray:');
  [
    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  ].forEach( vs => {
    console.log(`  maxSum=${maxSubArray(vs)}; nums=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
