/**
 * @param {number}      n     the number to check
 * @return {boolean}          whether it is a power of 2
 */
const isPowerOfTwo = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0231 - Power of Two:');
  [
    1,
    16,
    218,
  ].forEach( v => {
    console.log(`  num=${v}, pow2=${isPowerOfTwo(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
