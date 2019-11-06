/**
 * @param {string}    num       the string containing numbers
 * @param {number}    target    the target calculation result
 * @return {string[]}           all possible calculation expressions
 */
const addOperators = function(num, target) {
  return [];
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
    ['3456237490', 9191],
  ].forEach( vs => {
    console.log(`  str="${vs[0]}", target=${vs[1]}`);
    addOperators(vs[0], vs[1]).forEach( (e, i, a) => {
      console.log(`  ${i+1}/${a.length}: "${e}"`);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
