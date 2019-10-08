/**
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit = function(prices) {
  let buy1 = Number.MIN_SAFE_INTEGER;
  let buy2 = Number.MIN_SAFE_INTEGER;
  let sell1 = 0;
  let sell2 = 0;
  for (let price of prices) {
    sell2 = Math.max(sell2, buy2 + price);  // the max if sell 2nd
    buy2  = Math.max(buy2, sell1 - price);  // the max if buy 2nd
    sell1 = Math.max(sell1, buy1 + price);  // the max if sell 1st
    buy1  = Math.max(buy1, -price);         // the max if buy 1st
  }
  return sell2;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0123 - Best Time to Buy and Sell Stock III:');
  [
    [3, 3, 5, 0, 0, 3, 1, 4],
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
