/**
 * @param {number[]}    nums    the number array
 * @return {string}             the largest number as a string
 */
const largestNumber = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0179 - Largest Number:');
  [
    [10, 2],
    [3, 30, 34, 5, 9],
  ].forEach( vs => {
    console.log(`  largest=${largestNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
