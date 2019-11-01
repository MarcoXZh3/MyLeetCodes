/**
 * @param {number[]}  nums    the number array
 * @return {number}           the missing number
 */
const missingNumber = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0268 - Missing Number:');
  [
    [3, 0, 1],
    [9, 6, 4, 2, 3, 5, 7, 0, 1],
  ].forEach( vs => {
    console.log(`  missing=${missingNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
