/**
 * as long as I can avoid 4, I can when
 * @param {number}      n     total number of stones
 * @return {boolean}          whether the 1st player can grab the final stones
 */
const canWinNim = function(n) {
  return n % 4 !== 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0292 - Nim Game:');
  [
    4
  ].forEach( v => {
    console.log(`  n=${v}, win=${canWinNim(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
