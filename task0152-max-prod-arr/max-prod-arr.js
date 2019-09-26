/**
 * brutal force: check every possible subarray
 * @param {number[]}  nums    the number array
 * @return {number}           the max product
 */
const maxProduct0 = function(nums) {
  let re = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let max = 1;
    for (let j = i; j < nums.length; j++) {
      max *= nums[j];
      re = Math.max(re, max);
      if (nums[j] === 0) {
        break ;
      }
    }
  }
  return re;
};


/**
 * @param {number[]}  nums    the number array
 * @return {number}           the max product
 */
const maxProduct = function(nums) {
  let re = nums[0];
  for (let i = 1, max = re, min = re; i < nums.length; i++) {
    if (nums[i] < 0) {
      const tmp = max;
      max = min;
      min = tmp;
    }
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    re = Math.max(re, max);
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0152 - Maximum Product Subarray:');
  [
    [2, 3, -2, 4],
    [-2, 0, -1],
  ].forEach( vs => {
    console.log(`  max=${maxProduct(vs)}, arr=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
