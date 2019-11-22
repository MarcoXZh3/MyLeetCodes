/**
 * @param {number[]}    nums    coins for the balloon
 * @return {number}             max number of coin
 */
const maxCoins = function(nums) {
  nums = [1, ...nums, 1];
  const n = nums.length;
  const dp = [...Array(n).keys()].map( _=>[...Array(n).keys()].map( _=>0 ));
  for (let k = 2; k < n; k++) {
    for (let left = 0; left < n - k; left++) {
      let right = left + k;
      for (let i = left + 1; i < right; i++) {
        dp[left][right] = Math.max(
          dp[left][right],
          nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right]
        );
      }
    }
  }
  return dp[0][n - 1];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0312 - Burst Balloons:');
  [
    [3, 1, 5, 8],
  ].forEach( vs => {
    const bk = vs.slice();
    console.log(`  max=${maxCoins(vs)}; nums=${JSON.stringify(bk)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
