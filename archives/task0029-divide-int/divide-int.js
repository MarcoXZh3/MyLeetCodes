/**
 * brutal force: simple count how many time of subtractions
 * @param {number}    dividend    the dividend number
 * @param {number}    divisor     the divisor number
 * @return {number}               the quotient number
 */
const divide1 = function(dividend, divisor) {
  const sign = dividend > 0 && divisor > 0 ||
               dividend < 0 && divisor < 0 ? 1 : -1
  const max = Math.pow(2, 31);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // count how many times of subtractions
  let quotient = 0;
  while (dividend >= divisor && quotient <= max) {
    dividend -= divisor;
    quotient ++;
  }
  return sign < 0 ? -Math.min(quotient, max) : Math.min(quotient, max - 1);
};


/**
 * optimized: speed up the counting linearly
 * @param {number}    dividend    the dividend number
 * @param {number}    divisor     the divisor number
 * @return {number}               the quotient number
 */
const divide2 = function(dividend, divisor) {
  const sign = dividend > 0 && divisor > 0 ||
               dividend < 0 && divisor < 0 ? 1 : -1
  const max = Math.pow(2, 31);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // speed up the counting
  let quotient = 0;
  const divisor0 = divisor;
  let speed = 1;
  while (dividend >= divisor && quotient <= max) {
    dividend -= divisor;    // count
    quotient += speed;
    divisor += divisor0;    // and speed up
    speed ++;
  }
  // slow down
  while (divisor > divisor0) {
    divisor -= divisor0;
    speed --;
    // count in a lower speed
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient += speed;
    }
  }
  return sign < 0 ? -Math.min(quotient, max) : Math.min(quotient, max - 1);
};


/**
 * optimized: speed up the counting exponentially (bitwise shift)
 * @param {number}    dividend    the dividend number
 * @param {number}    divisor     the divisor number
 * @return {number}               the quotient number
 */
const divide = function(dividend, divisor) {
  const sign = dividend > 0 && divisor > 0 ||
               dividend < 0 && divisor < 0 ? 1 : -1
  const max = Math.pow(2, 31);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // speed up the counting
  let quotient = 0;
  let speed = 1;
  while (dividend >= divisor && quotient <= max) {
    dividend -= divisor;        // count
    quotient += speed;
    while (divisor << 1 > 0) {  // speed up avoiding overflow
      divisor <<= 1;            // speed up: divisor = divisor * 2
      speed <<= 1;              // speed = speed * 2
    }
  }
  // slow down
  while (speed > 1) {
    divisor >>= 1;
    speed >>= 1;
    // count in a lower speed
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient += speed;
    }
  }
  return sign < 0 ? -Math.min(quotient, max) : Math.min(quotient, max - 1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0029 - Divide Two Integers:');
  [
    [10, 3],
    [7, -3],
    [1, 1],
    [-2147483648, 1],
    [-2147483648, 2],
  ].forEach( vs => {
    console.log(`  ${vs[0]} / ${vs[1]} = ${divide(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
