/**
 * @param {string}    num       the string containing numbers
 * @param {number}    target    the target calculation result
 * @return {string[]}           all possible calculation expressions
 */
const addOperators = function(num, target) {
  const recursion = (pos, val, prod, exp) => {
    if (pos === num.length) {
      if (val === target) {
        res.push(exp);
      }
      return ;
    }
    for (let i = pos; i < num.length; i++) {
      if (i !== pos && num.charAt(pos) === '0') {
        break ;
      }
      const cur = parseInt(num.substring(pos, i + 1), 10);
      if (pos === 0) {
        recursion(i + 1, val + cur, cur, exp + cur);
      } else {
        recursion(i + 1, val + cur, cur, exp + '+' + cur);
        recursion(i + 1, val - cur, -cur, exp + '-' + cur);
        recursion(i + 1, val - prod + prod * cur, prod * cur, exp + '*' + cur);
      }
    }
  };
  const res = [];
  recursion(0, 0, 0, '', num, target);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0282 - Expression Add Operators:');
  [
    ['123', 6],
    ['232', 8],
    ['105', 5],
    ['00', 0],
    // ['3456237490', 9191],
  ].forEach( vs => {
    addOperators(vs[0], vs[1]).forEach( (e, i, a) => {
      console.log(`  "${vs[0]}" - ${i+1}/${a.length}: "${e}" = ${vs[1]}`);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
