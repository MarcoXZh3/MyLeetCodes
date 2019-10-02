/**
 * @param {number}    numerator       numerator of the fraction
 * @param {number}    denominator     denominator of the fraction
 * @return {string}                   the recurring decimal in string
 */
const fractionToDecimal = function(numerator, denominator) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0166 - Fraction to Recurring Decimal:');
  [
    [1, 2],
    [2, 1],
    [2, 3],
  ].forEach( vs => {
    console.log(`  frac=${vs[0]}/${vs[1]}, decimal=${fractionToDecimal(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
