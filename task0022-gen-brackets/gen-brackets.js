/**
 * @param {number}      n     number of parentheses to generate
 * @return {string[]}         all of the possible solutions
 */
const generateParenthesis = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0022 - Generate Parentheses:');
  [
    3,
  ].forEach( n => {
    console.log(`  n=${n}, res=[ ${generateParenthesis(n).join(', ')} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
