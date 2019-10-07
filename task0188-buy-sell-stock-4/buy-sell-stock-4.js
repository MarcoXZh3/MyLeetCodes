/**
 * @param {number}      k         how many transactions per day
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit = function(k, prices) {
  const n = prices.length;
  if (n <= 1) {
    return 0;
  }
  if (k >= Math.floor(n / 2)) {
    let max = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        max += prices[i] - prices[i - 1];
      }
    }
    return max;
  }

  const dp = [...Array(k + 1).keys()].map(_=>[...Array(n).keys()].map(_=>0));
  for (let i = 1; i <= k; i++) {
    let max = dp[i - 1][0] - prices[0];
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + max);
      max = Math.max(max, dp[i - 1][j] - prices[j]);
    }
  }
  return dp[k][n - 1];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0188 - Best Time to Buy and Sell Stock IV:');
  [
    [2, [2, 4, 1]],
    [2, [3, 2, 6, 5, 0, 3]],
  ].forEach( vs => {
    console.log(`  max=${maxProfit(vs[0], vs[1])}; k=${vs[0]}, stocks=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
