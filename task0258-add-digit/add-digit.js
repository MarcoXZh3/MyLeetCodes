/**
 * @param {number}    num   the origin number
 * @return {number}         the added-up digit
 */
const addDigits = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0258 - Add Digits:');
  [
    38,
  ].forEach( v => {
    console.log(`  num=${v}, digit=${addDigits(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
