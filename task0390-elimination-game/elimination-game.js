/**
 * @param {number}      n     the max number
 * @return {number}           the last number remaining
 */
const lastRemaining = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0390 - Elimination Game:');
  [
    9,
  ].forEach( v => {
    console.log(`  n=${v}, last=${lastRemaining(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
