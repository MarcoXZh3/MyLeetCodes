/**
 * @param {string}    a     the 1st binary
 * @param {string}    b     the 2nd binary
 * @return {string}         the sum binary
 */
const addBinary = function(a, b) {
  // make sure a is no longer than b
  if (a.length > b.length) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  // add the common parts of a and b digit by digit
  let carry = 0;
  let sum = [];
  for (let i = 0; i < a.length; i++) {
    const re = (a.charAt(a.length - 1 - i) === '1' ? 1 : 0) +
               (b.charAt(b.length - 1 - i) === '1' ? 1 : 0) + carry;
    carry = Math.floor(re / 0b10);
    sum.unshift(re % 0b10);
  }
  // deal with the remaining part of b
  let i = b.length - a.length - 1;
  while (i >= 0) {
    const re = (b.charAt(i--) === '1' ? 1 : 0) + carry;
    carry = Math.floor(re / 0b10);
    sum.unshift(re % 0b10);
  }
  if (carry) {
    sum.unshift(carry);
  }
  return sum.join('');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0067 - Add Binary:');
  [
    ['11', '1'],
    ['1010', '1011'],
    ['100', '110010'],
  ].forEach( vs => {
    console.log(`  ${vs[0]} + ${vs[1]} = ${addBinary(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
