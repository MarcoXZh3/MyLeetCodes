/**
 * @param {number}    a     the 1st integer
 * @param {number}    b     the 2nd integer
 * @return {number}         the sum of the two integers
 */
const getSum0 = function(a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};


/**
 * @param {number}    a     the 1st integer
 * @param {number}    b     the 2nd integer
 * @return {number}         the sum of the two integers
 */
const getSum = function(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  }
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0371 - Sum of Two Integers:');
  [
    [1, 2],
    [-2, 3],
  ].forEach( vs => {
    console.log(`  sum=${getSum(...vs)}, a=${vs[0]}, b=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
