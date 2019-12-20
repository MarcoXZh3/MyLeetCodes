/**
 * @param {number[]}    nums      the number array
 * @param {number}      target    the target sum
 * @return {number}               how many combinations
 */
const combinationSum4_0 = function(nums, target) {
  const recursion = (target) => {
    if (dp[target] != -1) {
      return dp[target];
    }
    let re = 0;
    for (let n of nums) {
      if (target >= n) {
        re += recursion(target - n);
      }
    }
    dp[target] = re;
    return re;
  };

  const dp = Array(target + 1).fill(-1);
  dp[0] = 1;
  return recursion(target);
};


/**
 * @param {number[]}    nums      the number array
 * @param {number}      target    the target sum
 * @return {number}               how many combinations
 */
const combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0377 - Combination Sum IV:');
  [
    [ [1, 2, 3], 4],
  ].forEach( vs => {
    console.log(`  re=${combinationSum4(...vs)}, nums=${JSON.stringify(vs[0])}, target=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
