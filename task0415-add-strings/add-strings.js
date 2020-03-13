/**
 * @param {string}    num1    the 1st number
 * @param {string}    num2    the 2nd number
 * @return {string}           the sum of the two numbers
 */
const addStrings = function(num1, num2) {

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
