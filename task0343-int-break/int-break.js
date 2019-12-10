/**
 * @param {number}    n   the integer to break
 * @return {number}       the maximized product
 */
const integerBreak0 = function(n) {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(
        dp[i],
        Math.max(j, dp[j]) * Math.max(i - j, dp[i - j])
      );
    }
  }
  return dp[n];
};


/**
 * @param {number}    n   the integer to break
 * @return {number}       the maximized product
 */
const integerBreak1 = function(n) {
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  }
  let prod = 1;
  while (n > 4) {
    prod *= 3;
    n -= 3;
  }
  return prod * n;
};


/**
 * @param {number}    n   the integer to break
 * @return {number}       the maximized product
 */
const integerBreak = function(n) {
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  } else if (n % 3 === 0) {
    return Math.pow(3, Math.floor(n / 3));
  } else if (n % 3 === 1) {
    return 2 * 2 * Math.pow(3, Math.floor((n - 4) / 3));
  } else {
    return 2 * Math.pow(3, Math.floor(n / 3));
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0343 - Integer Break:');
  [
    2,
    10,
  ].forEach( v => {
    console.log(`  num=${v}, maxProd=${integerBreak(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
