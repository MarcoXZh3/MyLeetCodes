/**
 * @param {string}    num1    the 1st number
 * @param {string}    num2    the 2nd number
 * @return {string}           the sum of the two numbers
 */
const addStrings = function(num1, num2) {
  num1 = num1.split('');
  num2 = num2.split('');
  let re = '';
  let carry = 0;
  while (num1.length > 0 || num2.length > 0 || carry > 0) {
    const n1 = num1.length > 0 ? parseInt(num1.pop(), 10) : 0;
    const n2 = num2.length > 0 ? parseInt(num2.pop(), 10) : 0;
    re = `${(n1 + n2 + carry) % 10}${re}`;
    carry = Math.floor((n1 + n2 + carry) / 10);
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0415 - Add Strings:');
  [
    ['123456789', '987654321'],
  ].forEach( vs => {
    console.log(`  n1=${vs[0]}, n2=${vs[1]}, sum=${addStrings(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
