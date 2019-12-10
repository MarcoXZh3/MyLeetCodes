/**
 * @param {number}      num     the upper boundary number
 * @return {number[]}           how many 1s in the numbers
 */
const countBits = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0338 - Counting Bits:');
  [
    2,
    5,
  ].forEach( v => {
    console.log(`  num=${v}, 1s=${JSON.stringify(countBits(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
