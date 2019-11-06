/**
 * @param {number[]}    nums    the number array
 * @return {number}             the only duplicate in the array
 */
const findDuplicate = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0286 - Find the Duplicate Number:');
  [
    [1, 3, 4, 2, 2],
    [3, 1, 3, 4, 2],
  ].forEach( vs => {
    console.log(`  dup=${findDuplicate(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
