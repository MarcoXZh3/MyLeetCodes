const LENGTH = 32;


/**
 * intuitive: Two's Complement Method
 * @see https://en.wikipedia.org/wiki/Two%27s_complement
 * @param {number}    num     the number to convert
 * @returns {number}          the converted number
 */
const twosComplement0 = function(num) {
  // non-negative: don't convert -- it's itself
  if (num >= 0) {
    return num;
  }

  // negative step 1: bitwise not of its absolute value, then plus 1
  const bits = [];
  num = -num;
  while (bits.length < LENGTH) {
    bits.unshift(1 - (num % 2));
    num = Math.floor(num / 2);
  }
  num = 0;
  let carry = 1;
  while (bits.length > 0) {
    const cur = bits.pop();
    num += ((cur + carry) % 2) * Math.pow(2, LENGTH - 1 - bits.length);
    carry = Math.floor((cur + carry) / 2);
  }
  return num;
};


/**
 * Two's Complement Method conversion 2 -- from the lowest:
 * 1. if 0 then 0;
 * 2. the first 1 still be 1;
 * 3. bitwise not for all the rest
 * @param {number}    num     the number to convert
 * @returns {number}          the converted number
 */
const twosComplement = function(num) {
  if (num >= 0) {
    return num;
  }
  const bits = [];
  num = -num;
  while (bits.length < LENGTH) {
    bits.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  num = 0;
  while (bits.length > 0) {
    const cur = bits.pop();
    num += (num > 0 ? 1 - cur : cur) * Math.pow(2, LENGTH - 1 - bits.length);
  }
  return num;
};


/**
 * @param {number}    num     the number to convert
 * @return {string}           the hex string
 */
const toHex = function(num) {
  const tc = twosComplement(num);
  return tc.toString(16);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0405 - Convert a Number to Hexadecimal:');
  [
    26,
    -1,
    -2,
  ].forEach( v => {
    console.log(`  n=${v}, hex="${toHex(v)}"`)
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
