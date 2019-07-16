/**
 * simple power: straight forward - x multiplies itself by n-1 times
 * @param {number}    x       the base number
 * @param {number}    n       the exponent, positive
 * @return {number}           the result
 */
const pow0 = function(x, n) {
  let re = x;
  for (let i = 1; i < n; i ++) {
    re *= x;
  }
  return re;
};


/**
 * simple power: optimized - speed up the counting linearly
 * @param {number}    x       the base number
 * @param {number}    n       the exponent, positive
 * @return {number}           the result
 */
const pow1 = function(x, n) {
  let re = x;
  let spd = 1;
  let cnt = 1;
  let x1 = x;
  for (; cnt + spd < n; cnt += spd) {   // speed up
    spd ++;
    x1 *= x;
    re *= x1;
  }
  x1 = 1.0;
  for (let i = 0; i < n - cnt; i++) {   // the remaining multiplies
    x1 *= x;
  }
  re *= x1;
  return re;
};


/**
 * @param {number}    x       the base number
 * @param {number}    n       the exponent, 32-bit signed integer
 * @return {number}           the result
 */
const myPow1 = function(x, n) {
  if (n === 0 || x === 1) {
    return 1.0;
  } else if (x === -1) {
    return n % 2 === 0 ? 1.0 : -1.0
  }
  const sign = n >= 0 ? 1 : -1;
  const re = pow(x, n < 0 ? -n : n);
  return sign > 0 ? re : 1.0 / re;
};


/**
 * recursion
 * @param {number}    x       the base number
 * @param {number}    n       the exponent, 32-bit signed integer
 * @return {number}           the result
 */
const myPow = function(x, n) {
  if (n === 0 || x === 1) {
    return 1.0;
  } else if (x === -1) {
    return n % 2 === 0 ? 1.0 : -1.0
  }
  x = n > 0 ? x : 1.0 / x;
  n = n > 0 ? n : -n;
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, Math.floor(n / 2));
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0050 - Pow(x, n):');
  [
    [2.0, 10],
    [2.1, 3],
    [2.0, -2],
    [0.44528, 0],
    [-1.00000, 2147483647],
  ].forEach( vs => {
    console.log(`  x=${vs[0]}, n=${vs[1]}; pow=${myPow(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
