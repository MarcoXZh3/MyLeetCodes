/**
 * @param {string}      s     the calculation expression
 * @return {number}           the result
 */
const calculate = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0224 - Basic Calculator:');
  [
    '1 + 1',
    ' 2-1 + 2 ',
    '(1+(4+5+2)-3)+(6+8)',
  ].forEach( v => {
    console.log(`  "${v}" = ${calculate(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
