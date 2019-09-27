/**
 * @param {number[]}    nums    the number array
 * @return {number}             the index of a peak element
 */
const findPeakElement = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0162 - Find Peak Element:');
  [
    [1, 2, 3, 1],
    [1, 2, 1, 3, 5, 6, 4],
  ].forEach( vs => {
    console.log(`  pkIdx=${findPeakElement(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
