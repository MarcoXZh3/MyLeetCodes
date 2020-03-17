/**
 * @param {number[]}    nums    the number array
 * @return {boolean}            whether can be split equally or not
 */
const canPartition = function(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum % 2 !== 0) {
    return false;
  }
  sum /= 2;
  const dp = [...Array(sum + 1).keys()].map( _=>false );
  dp[0] = true;
  for (let num of nums) {
    for (let i = sum; i > 0; i--) {
      if (i >= num) {
        dp[i] = dp[i] || dp[i - num];
      }
    }
  }
  return dp[sum];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0416 - Partition Equal Subset Sum:');
  [
    [1, 5, 11, 5],
    [1, 2, 3, 5],
    [1, 2, 5],
  ].forEach( vs => {
    console.log(`  canPartition=${canPartition(vs)}, arr=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
