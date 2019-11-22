/**
 * @param {number}      n         the nth super ugly number
 * @param {number[]}    primes    the prime list
 * @return {number}               the target number
 */
const nthSuperUglyNumber = function(n, primes) {
  const idxs = Array(primes.length).fill(0);
  const dp = Array(n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < primes.length; j++) {
      dp[i] = Math.min(dp[i], dp[idxs[j]] * primes[j]);
    }
    for (let j = 0; j < primes.length; j++) {
      idxs[j] += dp[i] === dp[idxs[j]] * primes[j] ? 1 : 0;
    }
  }
  return dp[n - 1];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0313 - Super Ugly Number:');
  [
    [12, [2, 7, 13, 19]],
  ].forEach( vs => {
    console.log(`  num=${nthSuperUglyNumber(vs[0], vs[1])}; n=${vs[0]}; primes=${JSON.stringify(vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
