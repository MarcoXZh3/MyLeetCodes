const BIT_LENGTH = 32;


/**
 * convert to binary string and reverse
 * @param {number}      n     a positive integer as the unsigned
 * @return {number}           a positive integer as the bit-reversed unsigned
 */
const reverseBits0 = function(n) {
  let rev = n.toString(2).split('').reverse().join('');
  while (rev.length < BIT_LENGTH) {
    rev += '0';
  }
  return parseInt(rev, 2);
};


/**
 * convert through calculation
 * @param {number}      n     a positive integer as the unsigned
 * @return {number}           a positive integer as the bit-reversed unsigned
 */
const reverseBits = function(n) {
  let re = 0;
  for (let i = 0; i < BIT_LENGTH; i++) {
    re = re * 2 + n % 2;
    n = Math.floor(n / 2);
  }
  return re;
};


/**
 * print the number as binary
 * @param {number}      n     the number to be converted
 * @returns {string}          the binary string
 */
const printBits = function(n) {
  let s = (n || 0).toString(2);
  while (s.length < BIT_LENGTH) {
    s = '0' + s;
  }
  return s;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0190 - Reverse Bits:');
  [
    43261596,
    4294967293,
  ].forEach( v => {
    console.log(`  bits=${printBits(v)}, num=${v}`);
    const r = reverseBits(v);
    console.log(`  bits=${printBits(r)}, rev=${r}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
