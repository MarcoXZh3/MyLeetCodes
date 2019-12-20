/**
 * @param {number}      n   the target digit to fetch
 * @return {number}         the nth digit
 */
const findNthDigit = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0400 - Nth Digit:');
  [
    3,
    11,
  ].forEach( v => {
    console.log(`  n=${v}, digit=${findNthDigit(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
