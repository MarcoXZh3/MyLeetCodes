const { Stack } = require('../_utils/stack');


const parentheses = {
  '(': ')',
  '[': ']',
  '{': '}',
};


/**
 * stack based verification
 * @param {string}      s     the string containing parentheses
 * @return {boolean}          whether is valid or not
 */
const isValid = function(s) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i ++) {
    const char = s.charAt(i);
    if (char in parentheses) {                              // open parentheses
      stack.push(char);
    } else if (Object.values(parentheses).includes(char)) { // close parentheses
      if (stack.empty() || parentheses[stack.peek()] !== char) {
        return false;         // not closing the matched parentheses
      }
      stack.pop();
    }
  }
  return stack.empty();
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
    '([)]',
    '{[]}',
  ].forEach( str => {
    console.log(`  valid=${isValid(str)}, str="${str}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
