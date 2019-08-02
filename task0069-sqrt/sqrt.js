/**
 * @param {number}    x   the number for square root
 * @return {number}       the truncated integer of square root of x
 */
const mySqrt = function(x) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0069 - sqrt(x):');
  [
    4,
    8,
  ].forEach( v => {
    console.log(`  (int) sqrt(${v})=${mySqrt(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
