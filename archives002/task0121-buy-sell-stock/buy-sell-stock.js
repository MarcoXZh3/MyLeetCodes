/**
 * brutal force
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit0 = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
};


/**
 * optimized: collecting minimum buying price and max selling price
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0121 - Best Time to Buy and Sell Stock:');
  [
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
  ].forEach( vs => {
    console.log(`  max=${maxProfit(vs)}; stocks=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
