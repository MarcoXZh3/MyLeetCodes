/**
 * iteration: insert n pairs of "()" into ""
 * @param {number}      n     number of parentheses to generate
 * @return {string[]}         all of the possible solutions
 */
const generateParenthesis1 = function(n) {
  const res = { '()':0 };
  // insert until length of all solutions becomes 2n
  // note: keys in js objects are ordered (oldest comes first, newest after)
  while (Object.keys(res)[0].length < 2 * n) {
    const re = Object.keys(res)[0];
    delete res[re];       // this slows down the efficiency!!!
    for (let i = 0; i <= re.length; i++) {
      res[re.substring(0, i) + '()' + re.substring(i)] = 0;
    }
  }
  return Object.keys(res);
};


/**
 * recursion: insert "()" into n-1 solutions to make n solutions
 * @param {number}      n     number of parentheses to generate
 * @return {string[]}         all of the possible solutions
 */
const generateParenthesis = function(n) {
  const b1 = '()';
  // when n is 1, there is only 1 solution
  if (n === 1) {
    return [b1];
  }

  // when n > 1: insert "()" to all positions of all n-1 solutions
  const res = {};
  const res0 = generateParenthesis(n-1);
  while (res0.length > 0) {
    const re = res0.shift();
    for (let i = 0; i <= re.length; i++) {
      res[re.substring(0, i) + b1 + re.substring(i)] = 0;
    }
  }
  return Object.keys(res);
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
