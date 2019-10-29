/**
 * @param {string}      input   the calculation expression
 * @return {number[]}           all results by adding brackets to the expression
 */
const diffWaysToCompute = function(input) {
  return [];
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
