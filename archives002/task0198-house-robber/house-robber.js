/**
 * dynamic programming with O(n) space
 * @param {number[]}    nums    cashes in houses
 * @return {number}             max amount to grab
 */
const rob0 = function(nums) {
  const dp = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 2] || 0, dp[i - 3] || 0);
  }
  return Math.max(dp[dp.length - 1] || 0, dp[dp.length - 2] || 0);
};


/**
 * dynamic programming with O(1) space
 * @param {number[]}    nums    cashes in houses
 * @return {number}             max amount to grab
 */
const rob = function(nums) {
  let re1 = 0;
  let re2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      re1 = Math.max(re1 + nums[i], re2);
    } else {
      re2 = Math.max(re1, re2 + nums[i]);
    }
  }
  return Math.max(re1, re2);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0198 - House Robber:');
  [
    [1, 2, 3, 1],
    [2, 7, 9, 3, 1],
    [2, 1, 1, 2],
  ].forEach( vs => {
    console.log(`  max=${rob(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
