/**
 * @param {number[]}  A     the arithmetic array
 * @return {number}         the number of arithmetic slices
 */
const numberOfArithmeticSlices = function(A) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0413 - Arithmetic Slices:');
  [
    [1, 2, 3, 4],
  ].forEach( vs => {
    console.log(`  n=${numberOfArithmeticSlices(vs)}, arr=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
