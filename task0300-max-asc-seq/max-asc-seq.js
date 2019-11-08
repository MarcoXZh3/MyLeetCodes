/**
 * dynamic programming
 * @param {number[]}  nums    the number array
 * @return {number}           the length of longest increasing sequence
 */
const lengthOfLIS = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;
  let max = 1;
  for (let i = 1; i < dp.length; i++) {
    let cnt = 0;
    for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
            cnt = Math.max(cnt, dp[j]);
        }
    }
    dp[i] = cnt + 1;
    max = Math.max(max, dp[i]);
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0300 - Longest Increasing Subsequence:');
  [
    [10, 9, 2, 5, 3, 7, 101, 18],
    [4, 10, 4, 3, 8, 9],
    [10, 9, 2, 5, 3, 4],
  ].forEach( vs => {
    console.log(`  lis=${lengthOfLIS(vs)} nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
