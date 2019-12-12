/**
 * @param {number}      n       number of digits of the upper bound number
 * @return {number}             number of target numbers
 */
const countNumbersWithUniqueDigits = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0357 - Count Numbers with Unique Digits:');
  [
    2,
  ].forEach( v => {
    console.log(`  n=${v}, cnt=${countNumbersWithUniqueDigits(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
