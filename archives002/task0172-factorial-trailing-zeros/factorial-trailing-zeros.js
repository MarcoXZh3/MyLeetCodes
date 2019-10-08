/**
 * iteration
 * @param {number}    n   number to calculate the factorial
 * @return {number}       how many trailing zeros
 */
const trailingZeroes0 = function(n) {
  let re = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    re += n;
  }
  return re;
};


/**
 * recursion
 * Trailing 0s come from 10s, which come from 2s and 5s. 2s are more frequent
 * than 5s, so this becomes to count how many 5s are in the factorization of n!
 * @param {number}    n   number to calculate the factorial
 * @return {number}       how many trailing zeros
 */
const trailingZeroes = function(n) {
  const recursion = (n) => n ? Math.floor(n / 5) + recursion(Math.floor(n / 5)): 0;
  return recursion(n);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0172 - Factorial Trailing Zeroes:');
  [
    5,
    25,
    125,
  ].forEach( v => {
    console.log(`  n=${v}, zeros=${trailingZeroes(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
