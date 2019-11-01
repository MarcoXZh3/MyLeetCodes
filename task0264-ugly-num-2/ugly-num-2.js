/**
 * @param {number}      n     the number
 * @return {number}           the target ugly number
 */
const nthUglyNumber = function(n) {
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  const dp = Array(n).fill(0);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
    if (dp[i] === dp[i2] * 2) {
      i2 ++;
    }
    if (dp[i] === dp[i3] * 3) {
      i3 ++;
    }
    if (dp[i] === dp[i5] * 5) {
      i5 ++;
    }
  }
  return dp[n - 1];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0264 - Ugly Number II:');
  [
    10,
    1352,
  ].forEach( v => {
    console.log(`  n=${v}, ugly=${nthUglyNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
