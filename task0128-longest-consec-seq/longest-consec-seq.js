/**
 * @param {number[]} nums   the number array
 * @return {number}         length of the longest consecutive sequence
 */
const longestConsecutive = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0128 - Longest Consecutive Sequence:');
  [
    [100, 4, 200, 1, 3, 2],
  ].forEach( vs => {
    console.log(`  length=${longestConsecutive(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
