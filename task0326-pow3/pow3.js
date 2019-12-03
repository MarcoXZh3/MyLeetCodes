const NUM = 3;
const EPSILON = 1e-10;
const MAX_SAFE_POW_3 = Math.pow(NUM, Math.floor(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(NUM)));

/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 3
 */
const isPowerOfThree0 = function(n) {
  if (n <= 0) {
    return false;
  }
  while (n % NUM === 0) {
    n /= NUM;
  }
  return n === 1;
};


/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 3
 */
const isPowerOfThree1 = function(n) {
  return /^10*$/.test(n.toString(NUM));
};


/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 3
 */
const isPowerOfThree2 = function(n) {
  return Math.abs((Math.log(n) / Math.log(NUM)) % 1) < EPSILON;
};


/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 3
 */
const isPowerOfThree = function(n) {
  return n > 0 && MAX_SAFE_POW_3 % n === 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0326 - Power of Three:');
  [
    27,
    0,
    9,
    45,
    129140164,
  ].forEach( v => {
    console.log(`  num=${v}, pow3=${isPowerOfThree(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
