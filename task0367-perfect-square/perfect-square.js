/**
 * brutal force - linear search from all smaller numbers
 * @param {number}      num     the number to check
 * @return {boolean}            whether is perfect square or not
 */
const isPerfectSquare0 = function(num) {
  let root = 0;
  while (root * root < num) {
    root ++;
  }
  return root * root === num;
};


/**
 * binary search
 * @param {number}      num     the number to check
 * @return {boolean}            whether is perfect square or not
 */
const isPerfectSquare1 = function(num) {
  let l = 0;
  let r = num;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (m * m < num) {
      l = m + 1;
    } else if (m * m > num) {
      r = m - 1;
    } else {
      return true;
    }
  }
  return false;
};


/**
 * Newton's method
 * @param {number}      num     the number to check
 * @return {boolean}            whether is perfect square or not
 */
const isPerfectSquare2 = function(num) {
  let root = num;
  while (root * root > num) {
    root = Math.floor((root + num / root) / 2);
  }
  return root * root === num;
};


/**
 * bitwise operations
 * @param {number}      num     the number to check
 * @return {boolean}            whether is perfect square or not
 */
const isPerfectSquare3 = function(num) {
  let root = 0;
  let bit = 1 << 15;
  while (bit > 0) {
    root |= bit;
    if (root > Math.floor(num / root)) {
      root ^= bit;
    }
    bit >>= 1;
  }
  return root * root === num;
};


/**
 * math: n ^ 2 = 1 + 3 + 5 + ... + (2 * n - 1)
 * @param {number}      num     the number to check
 * @return {boolean}            whether is perfect square or not
 */
const isPerfectSquare = function(num) {
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num === 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0367 - Valid Perfect Square:');
  [
    16,
    14,
  ].forEach( v => {
    console.log(`  num=${v}, perfect=${isPerfectSquare(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
