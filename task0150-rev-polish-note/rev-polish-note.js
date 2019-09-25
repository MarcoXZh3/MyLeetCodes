/**
 * @param {string[]}    tokens    the reverse polish notification tokens
 * @return {number}               the calculation result
 */
const evalRPN = function(tokens) {
  const stack = [];
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (token === '-') {
      const x2 = stack.pop();
      const x1 = stack.pop();
      stack.push(x1 - x2);
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (token === '/') {
      let x = stack.pop();
      x = stack.pop() / x;
      stack.push((x < 0 ? -1 : 1) * Math.floor(Math.abs(x)));
    } else {
      stack.push(parseInt(token, 10));
    }
  }
  return stack.pop();
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0150 - Evaluate Reverse Polish Notation:');
  [
    ['2', '1', '+', '3', '*'],
    ['4', '13', '5', '/', '+'],
    ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'],
  ].forEach( vs => {
    console.log(`  re=${evalRPN(vs)}, rpn=[${vs.map( x=>`"${x}"` ).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
