/**
 * @param {number}    num   the origin number
 * @return {number}         the added-up digit
 */
const addDigits0 = function(num) {
  while (num >= 10) {
    let re = 0;
    while (num > 0) {
      re += num % 10;
      num = Math.floor(num / 10);
    }
    num = re;
  }
  return num;
};


/**
 * @see https://en.wikipedia.org/wiki/Digital_root#Congruence_formula
 * @param {number}    num   the origin number
 * @return {number}         the added-up digit
 */
const addDigits = function(num) {
  return num === 0 ? 0 : 1 + (num - 1) % 9;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0258 - Add Digits:');
  [
    38,
    10,
  ].forEach( v => {
    console.log(`  num=${v}, digit=${addDigits(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
