/**
 * @param {string}      input   the calculation expression
 * @return {number[]}           all results by adding brackets to the expression
 */
const diffWaysToCompute = function(input) {
  const res = [];
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    if (!['+', '-', '*'].includes(char)) {
      continue ;
    }
    const res1 = diffWaysToCompute(input.substring(0, i));
    const res2 = diffWaysToCompute(input.substring(i + 1));
    for (let re1 of res1) {
      for (let re2 of res2) {
        if (char === '+') {
          res.push(re1 + re2);
        } else if (char === '-') {
          res.push(re1 - re2);
        } else if (char === '*') {
          res.push(re1 * re2);
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(parseInt(input, 10));
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0241 - Different Ways to Add Parentheses:');
  [
    '2-1-1',
    '2*3-4*5',
  ].forEach( v => {
    console.log(`  exp=${v}, res=[${diffWaysToCompute(v)}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
