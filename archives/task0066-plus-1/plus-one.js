/**
 * @param {number[]}    digits    the number in digits array
 * @return {number[]}             the digits array of the number plus 1
 */
const plusOne = function(digits) {
  // plus 1
  digits[digits.length - 1] ++;
  // handles the carry
  let carry = 0;
  let i = digits.length - 1;
  while (i >= 0) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    if (!carry) {
      break ;
    }
    digits[i--] %= 10;
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0066 - Plus One:');
  [
    [1, 2, 3],
    [4, 3, 2, 1],
  ].forEach( vs => {
    console.log(`  num1=[${vs.join(', ')}]; num2=${plusOne(vs).join('')}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
