/**
 * @param {number}        n     the number
 * @return {boolean}            whether it's power of 4
 */
const isPowerOfFour = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0342 - Power of Four:');
  [
    16,
    5,
  ].forEach( v => {
    console.log(`  num=${v}, pow4=${isPowerOfFour(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
