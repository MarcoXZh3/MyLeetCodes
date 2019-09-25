/**
 * @param {string[]}    tokens    the reverse polish notification tokens
 * @return {number}               the calculation result
 */
const evalRPN = function(tokens) {

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
