/**
 * @param {number}      n     the number to check
 * @return {boolean}          whether it is a power of 2
 */
const isPowerOfTwo0 = function(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
};


/**
 * @param {number}      n     the number to check
 * @return {boolean}          whether it is a power of 2
 */
const isPowerOfTwo = function(n) {
  return n > 0 && !(n & (n - 1));
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0231 - Power of Two:');
  [
    0,
    1,
    16,
    218,
  ].forEach( v => {
    console.log(`  num=${v}, pow2=${isPowerOfTwo(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
