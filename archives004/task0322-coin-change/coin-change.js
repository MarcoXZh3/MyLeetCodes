/**
 * dynamic programming - top down with recursion
 * @param {number[]}    coins     the coins
 * @param {number}      amount    the total amount
 * @return {number}               minimum number of coins
 */
const coinChange0 = function(coins, amount) {
  const recursion = (amount, dp) => {
    if (amount < 0) {
      return -1;
    } else if (amount === 0) {
      return 0;
    } else if (dp[amount - 1] !== 0) {
      return dp[amount - 1];
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let coin of coins) {
      let re = recursion(amount - coin, dp);
      if (re >= 0 && re < min) {
        min = re + 1;
      }
    }
    dp[amount - 1] = min === Number.MAX_SAFE_INTEGER ? -1 : min;
    return dp[amount - 1];
  };
  return recursion(amount, Array(amount).fill(0));
};


/**
 * dynamic programming - bottom up
 * @param {number[]}    coins     the coins
 * @param {number}      amount    the total amount
 * @return {number}               minimum number of coins
 */
const coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
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
    [6249, [186, 419, 83, 408]],
    [6977, [122, 112, 383, 404, 25, 368]],
  ].forEach( vs => {
    console.log(`  num=${coinChange(vs[1], vs[0])}, total=${vs[0]}, coins=${JSON.stringify(vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
