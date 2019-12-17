/**
 * @param {number}      n     max possible number
 * @return {number}           how much to guarantee win
 */
const getMoneyAmount0 = function(n) {
  const recursion = (i, j) => {
    if (i >= j) {
      return 0;
    } else if (dp[i][j]) {
      return dp[i][j];
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j; k++) {
      res = Math.min(res, k + Math.max(recursion(i, k - 1), recursion(k + 1, j)));
    }
    dp[i][j] = res;
    return res;
  };
  const dp = [...Array(n+1).keys()].map(_=>[...Array(n+1).keys()].map(_=>0));
  return recursion(1, n);
};


/**
 * @param {number}      n     max possible number
 * @return {number}           how much to guarantee win
 */
const getMoneyAmount = function(n) {
  const dp = [...Array(n+1).keys()].map(_=>[...Array(n+1).keys()].map(_=>0));
  for (let j = 2; j <= n; j++) {
    for (let i = j - 1; i > 0; i--) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let k = i + 1; k < j; k++) {
        min = Math.min(min, k + Math.max(dp[i][k - 1], dp[k + 1][j]));
      }
      dp[i][j] = i + 1 === j ? i : min;
    }
  }
  return dp[1][n];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0375 - Guess Number Higher or Lower II:');
  [
    10,
    20,
  ].forEach( v => {
    console.log(`  n=${v}, min=${getMoneyAmount(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
