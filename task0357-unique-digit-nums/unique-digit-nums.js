/**
 * dynamic programming
 * @param {number}      n       number of digits of the upper bound number
 * @return {number}             number of target numbers
 */
const countNumbersWithUniqueDigits0 = function(n) {
  if (n === 0) {
    return 1;
  }
  const dp = Array(n).fill(0);
  dp[0] = 10;
  for (let i = 1; i < n; i++) {
    let cnt = 9;
    let re = cnt;
    for (let j = 1; j <= i; j++) {
      re *= cnt --;
    }
    dp[i] = re + dp[i - 1];
  }
  return dp[n - 1];
};


/**
 * @param {number}      n       number of digits of the upper bound number
 * @return {number}             number of target numbers
 */
const countNumbersWithUniqueDigits = function(n) {
  if (n === 0) {
    return 1;
  }
  let res = 10;
  let uniqueDigits = 9;
  let availableNumber = 9;
  while (n -- > 1 && availableNumber > 0) {
      uniqueDigits = uniqueDigits * availableNumber;
      res += uniqueDigits;
      availableNumber --;
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0357 - Count Numbers with Unique Digits:');
  [
    2,
  ].forEach( v => {
    console.log(`  n=${v}, cnt=${countNumbersWithUniqueDigits(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
