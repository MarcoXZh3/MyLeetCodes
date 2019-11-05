/**
 * dynamic programming
 * @param {number}    n     the number to split
 * @return {number}         least number of squares
 */
const numSquares0 = function(n) {
  // const dp = [Array(n + 1).keys()].map( _=>[] );
  // dp[1] = [1];
  // for (let i = 2; i <= n; i++) {
  //   let re = [];
  //   for (let j = Math.floor(Math.sqrt(i)); j > 0; j--) {
  //     if (re.length === 0 || dp[i - j * j].length < re.length - 1) {
  //       re = dp[i - j * j].slice();
  //       re.push(j);
  //     }
  //   }
  //   dp[i] = re;
  // }
  // return dp[dp.length - 1];

  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let re = Number.MAX_SAFE_INTEGER;
    for (let j = Math.floor(Math.sqrt(i)); j > 0; j--) {
      re = Math.min(re, dp[i - j * j]);
    }
    dp[i] = 1 + re;
  }
  return dp[dp.length - 1];
};


/**
 * Lagrange's Four Square theorem: "every natural number can be represented as
 * the sum of four integer squares".
 * @see https://en.wikipedia.org/wiki/Lagrange%27s_four-square_theorem
 * @param {number}    n     the number to split
 * @return {number}         least number of squares
 */
const numSquares = function(n) {
  const sqrt = Math.floor(Math.sqrt(n));
  if (sqrt * sqrt === n) {
    return 1;
  }

  while (n % 4 === 0) {
    n /= 4;
  }
  if (n % 8 === 7) {
    return 4;
  }

  for (let i = 1; i <= sqrt; i++) {
    const sqrt2 = Math.floor(Math.sqrt(n - i * i));
    if (sqrt2 * sqrt2 === n - i * i) {
      return 2;
    }
  }
  return 3;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0279 - Perfect Squares:');
  [
    12,
    13,
    55,
  ].forEach( v => {
    console.log(`  n=${v}, num=${numSquares(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
