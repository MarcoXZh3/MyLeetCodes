/**
 * @param {number}      n     max possible number
 * @return {number}           how much to guarantee win
 */
const getMoneyAmount = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0375 - Guess Number Higher or Lower II:');
  [
    10,
  ].forEach( v => {
    console.log(`  n=${v}, min=${getMoneyAmount(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
