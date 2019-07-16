/**
 * @param {number}    x       the base number
 * @param {number}    n       the exponent, 32-bit signed integer
 * @return {number}           the result
 */
const myPow = function(x, n) {

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
