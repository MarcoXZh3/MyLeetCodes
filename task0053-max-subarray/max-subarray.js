/**
 * brutal force: check every possible sum
 * @param {number[]}  nums    the number array
 * @return {number}           sum of the max sub-array
 */
const maxSubArray0 = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (max < sum) {
        max = sum;
      }
    }
  }
  return max;
};


/**
 * @param {number[]}  nums    the number array
 * @return {number}           sum of the max sub-array
 */
const maxSubArray = function(nums) {
  const dp = [nums[0]];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp.push(nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0));
    if (max <dp[i]) {
      max = dp[i];
    }
  }
  return max;
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
