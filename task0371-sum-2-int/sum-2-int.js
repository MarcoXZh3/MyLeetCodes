/**
 * @param {number}    a     the 1st integer
 * @param {number}    b     the 2nd integer
 * @return {number}         the sum of the two integers
 */
const getSum = function(a, b) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0371 - Sum of Two Integers:');
  [
    [1, 2],
    [-2, 3],
  ].forEach( vs => {
    console.log(`  sum=${getSum(...vs)}, a=${vs[0]}, b=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
