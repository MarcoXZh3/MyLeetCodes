/**
 * @param {string}      s   the raw expression containing parentheses
 * @return {string[]}       the valid expressions
 */
const removeInvalidParentheses = function(s) {
  return ['a', 'b'];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0301 - Remove Invalid Parentheses:');
  [
    '()())()',
    '(a)())()',
    ')(',
  ].forEach( v => {
    console.log(`  raw="${v}", valid=${JSON.stringify(removeInvalidParentheses(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
