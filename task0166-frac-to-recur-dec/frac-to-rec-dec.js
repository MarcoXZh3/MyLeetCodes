/**
 * @param {number}    numerator       numerator of the fraction
 * @param {number}    denominator     denominator of the fraction
 * @return {string}                   the recurring decimal in string
 */
const fractionToDecimal = function(numerator, denominator) {
  // part 1: sign - positive or negative
  let re = numerator * denominator < 0 ? '-' : '';
  denominator = Math.abs(denominator);
  numerator = Math.abs(numerator);

  // part 2: integer part
  re += `${Math.floor(numerator / denominator)}`;
  numerator = 10 * (numerator % denominator);
  if (numerator === 0) {
    return re;
  }

  // part 3: decimal part
  re += '.';
  const digits = {};
  while (numerator !== 0) {
    // if recurring part found, quote it and return
    if (digits[`${numerator}`]) {
      return re.substring(0, digits[`${numerator}`]) +
             '(' +
             re.substring(digits[`${numerator}`]) +
             ')';
    }
    // otherwise add the digit to the result
    re += `${Math.floor(numerator / denominator)}`;
    // and remember the index of the digit in the entire string
    digits[`${numerator}`] = re.length - 1;
    numerator = 10 * (numerator % denominator);
  }

  // no recurring part found, return the result directly
  return re;
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
    [1, 6],
    [1, 7],
  ].forEach( vs => {
    console.log(`  frac=${vs[0]}/${vs[1]}, decimal=${fractionToDecimal(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
