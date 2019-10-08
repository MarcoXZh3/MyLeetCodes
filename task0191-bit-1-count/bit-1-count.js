const BIT_LENGTH = 32;


/**
 * @param {number}      n     a positive integer as the unsigned
 * @return {number}           number of bits `1`
 */
const hammingWeight = function(n) {

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
  console.log('Task 0191 - Number of 1 Bits:');
  [
    0b00000000000000000000000000001011,
    0b00000000000000000000000010000000,
    0b11111111111111111111111111111101,
  ].forEach( v => {
    console.log(`  bits=${printBits(v)}, num=${v}`);
    const n = hammingWeight(v);
    console.log(`  bits=${printBits(n)}, cnt=${n}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
