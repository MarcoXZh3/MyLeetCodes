/**
 * @param {number}    n   number to calculate the factorial
 * @return {number}       how many trailing zeros
 */
const trailingZeroes = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0172 - Factorial Trailing Zeroes:');
  [
    5,
  ].forEach( v => {
    console.log(`  n=${v}, zeros=${trailingZeroes(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
