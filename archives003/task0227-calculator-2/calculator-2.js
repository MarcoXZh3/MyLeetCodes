/**
 * @param {string}      s     the calculation expression
 * @return {number}           the result
 */
const calculate = function(s) {
  let stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (/\d/.test(char)) {
      num = num * 10 + parseInt(char, 10);
    }
    if (i === s.length - 1 || /\D/.test(char) && char !== ' ') {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        const re = stack.pop() / num;
        stack.push(Math.floor(Math.abs(re)) * (re < 0 ? -1 : 1));
      }
      num = 0;
      sign = char;
    }
  }
  let re = 0;
  while (stack.length > 0) {
    re += stack.pop();
  }
  return re;
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
