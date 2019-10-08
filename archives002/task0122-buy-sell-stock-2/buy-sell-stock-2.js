/**
 * peak - valley
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit0 = function(prices) {
  let i = 0;
  let valley = prices[0];
  let peak = prices[0];
  let max = 0;
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i+1]) {
      i ++;
    }
    valley = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i+1]) {
      i++;
    }
    peak = prices[i];
    max += peak - valley;
  }
  return max;
};


/**
 * simple one pass
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit = function(prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0122 - Best Time to Buy and Sell Stock II:');
  [
    [7, 1, 5, 3, 6, 4],
    [1, 2, 3, 4, 5],
    [7, 6, 4, 3, 1],
  ].forEach( vs => {
    console.log(`  max=${maxProfit(vs)}; stocks=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
