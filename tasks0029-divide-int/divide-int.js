/**
 * optimized: speed up the counting exponentially (bitwise shift)
 * @param {number}    dividend    the dividend number
 * @param {number}    divisor     the divisor number
 * @return {number}               the quotient number
 */
const divide = function(dividend, divisor) {

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
