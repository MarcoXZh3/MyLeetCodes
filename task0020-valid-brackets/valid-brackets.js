/**
 * @param {string}      s     the string containing parentheses
 * @return {boolean}          whether is valid or not
 */
const isValid = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0020 - Valid Parentheses:');
  [
    '()',
    '()[]{}',
    '(]',
    '([])]',
    '{[]}',
  ].forEach( str => {
    console.log(`  valid=${isValid(str)}, str="${str}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
