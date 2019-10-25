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
  console.log('Task 0227 - Basic Calculator II:');
  [
    '3+2*2',
    ' 3/2 ',
    ' 3+5 / 2 ',
  ].forEach( v => {
    console.log(`  "${v}" = ${calculate(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
