/**
 * @param {number[]}    nums    the list with missing positive number
 * @return {number}             the missing positive number
 */
const firstMissingPositive = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0041 - First Missing Positive:');
  [
    [1, 2, 0],
    [3, 4, -1, 1],
    [7, 8, 9, 11, 12],
  ].forEach( vs => {
    console.log(`  re=${firstMissingPositive(vs)}; nums=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
