/**
 * stack for flat expressions
 * @param {string}      s     the calculation expression
 * @return {number}           the result
 */
const calculate0 = function(s) {
  const simpleExpression = (s) => {
    s = ('0+' + s + '+').replace(/\+\-/g, '-').replace(/\-\-/g, '+');
    let cur = '';
    let re = 0;
    let sign = 1;
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (/\d/.test(char)) {
        cur += char;
      } else {
        re += sign * parseInt(cur, 10);
        cur = '';
        sign = char === '+' ? 1 : -1;
      }
    }
    return re;
  };

  const stack = [];
  let exp = '';
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === ' ') {
    } else if (char === '(') {
      stack.push(exp);
      exp = '';
    } else if (char === ')') {
      exp = `${stack.pop()}${simpleExpression(exp)}`;
    } else {
      exp += char;
    }
  }
  return simpleExpression(exp);
};


/**
 * stack for previous calculation results
 * @param {string}      s     the calculation expression
 * @return {number}           the result
 */
const calculate = function(s) {
  const stack = [];
  let re = 0;
  let num = 0;
  let sign = 1;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === ' ') {
    } else if (char === '(') {
      stack.push(re);
      stack.push(sign);
      re = 0;
      sign = 1;
    } else if (char === ')') {
      re += sign * num;
      num = 0;
      re *= stack.pop();
      re += stack.pop();
    } else if (char === '+') {
      re += sign * num;
      num = 0;
      sign = 1;
    } else if (char === '-') {
      re += sign * num;
      num = 0;
      sign = -1;
    } else {
      num = 10 * num + parseInt(char, 10);
    }
  }
  return re + sign * num;
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
    '2 - (5 - 6)',
    '(5-(1+(5)))',
  ].forEach( v => {
    console.log(`  "${v}" = ${calculate(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
