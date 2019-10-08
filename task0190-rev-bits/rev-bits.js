const BIT_LENGTH = 32;


/**
 * @param {number}      n     a positive integer as the unsigned
 * @return {number}           a positive integer as the bit-reversed unsigned
 */
const reverseBits = function(n) {

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
