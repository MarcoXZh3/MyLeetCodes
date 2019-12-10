const NUM = 4;


/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 4
 */
const isPowerOfFour0 = function(n) {
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
 * @return {boolean}            whether it's power of 4
 */
const isPowerOfFour1 = function(n) {
  return /^10*$/.test(n.toString(NUM));
  return /^1(00)*$/.test(n.toString(2));
};


/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 4
 */
const isPowerOfFour = function(n) {
  return n > 0 && (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
  // 0x55555555 gets rid of those power of 2 but not power of 4
  return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0342 - Power of Four:');
  [
    16,
    5,
  ].forEach( v => {
    console.log(`  num=${v}, pow4=${isPowerOfFour(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
