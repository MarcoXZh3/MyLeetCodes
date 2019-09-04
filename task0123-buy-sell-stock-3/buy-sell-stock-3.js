/**
 * @param {number[]}    prices    stock prices
 * @return {number}               max profit
 */
const maxProfit = function(prices) {

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
