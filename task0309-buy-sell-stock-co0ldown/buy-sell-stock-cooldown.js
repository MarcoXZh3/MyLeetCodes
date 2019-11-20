/**
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit = function(prices) {
  let sell = 0;
  let prev_sell = 0;
  let buy = Number.MIN_SAFE_INTEGER;
  let prev_buy;
  for (let price of prices) {
      prev_buy = buy;
      buy = Math.max(prev_sell - price, prev_buy);
      prev_sell = sell;
      sell = Math.max(prev_buy + price, prev_sell);
  }
  return sell;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0309 - Best Time to Buy and Sell Stock with Cooldown:');
  [
    [1, 2, 3, 0, 2],
  ].forEach( vs => {
    console.log(`  max=${maxProfit(vs)}; stocks=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
