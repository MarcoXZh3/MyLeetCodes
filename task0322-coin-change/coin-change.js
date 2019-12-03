/**
 * @param {number[]}    coins     the coins
 * @param {number}      amount    the total amount
 * @return {number}               minimum number of coins
 */
const coinChange = function(coins, amount) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0322 - Coin Change:');
  [
    [11, [1, 2, 5]],
    [3, [2]],
  ].forEach( vs => {
    console.log(`  num=${coinChange(vs[1], vs[0])}, total=${vs[0]}, coins=${JSON.stringify(vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
