/**
 * @param {number}      n     the max number
 * @return {number}           how many 1s are there
 */
const countDigitOne = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0233 - Number of Digit One:');
  [
    13,
  ].forEach( v => {
    console.log(`  num=${v}; 1s=${countDigitOne(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
