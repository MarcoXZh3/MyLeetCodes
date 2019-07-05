/**
 * @param {string}    num1      the first number
 * @param {string}    num2      the second number
 * @return {string}             the result
 */
const multiply = function(num1, num2) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0043 - Multiply Strings:');
  [
    ['2', '3'],
    ['123', '246'],
  ].forEach( vs => {
    console.log(`  "${vs[0]}" * "${vs[1]}" = "${multiply(vs[0], vs[1])}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
