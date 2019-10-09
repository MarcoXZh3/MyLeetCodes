/**
 * @param {number}      m   first number of the range
 * @param {number}      n   last number of the range
 * @return {number}         bitwise and of all the numbers
 */
const rangeBitwiseAnd0 = function(m, n) {
  while(m < n) {
    n = n & (n-1);
  }
  return n;
};


/**
 * @param {number}      m   first number of the range
 * @param {number}      n   last number of the range
 * @return {number}         bitwise and of all the numbers
 */
const rangeBitwiseAnd = function(m, n) {
  return n > m ? (rangeBitwiseAnd(Math.floor(m / 2), Math.floor(n / 2)) << 1) : m;
}


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0201 - Bitwise AND of Numbers Range:');
  [
    [5, 7],
    [0, 1],
    [0, 2147483647],
  ].forEach( vs => {
    console.log(`  re=${rangeBitwiseAnd(vs[0], vs[1])}, range=[${vs[0]}, ${vs[1]}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
