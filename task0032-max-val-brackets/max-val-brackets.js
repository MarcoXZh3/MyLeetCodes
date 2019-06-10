/**
 * @param {string}    s     the string to search
 * @return {number}         length of the max valid parentheses
 */
const longestValidParentheses = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0032 - Longest Valid Parentheses:');
  [
    '(()',
    ')()())',
  ].forEach( str => {
    console.log(`  str="${str}", max=${longestValidParentheses(str)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
