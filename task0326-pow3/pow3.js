/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 3
 */
const isPowerOfThree = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0326 - Power of Three:');
  [
    27,
    0,
    9,
    45,
  ].forEach( v => {
    console.log(`  num=${v}, pow3=${isPowerOfThree(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
