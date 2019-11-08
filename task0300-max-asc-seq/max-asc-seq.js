/**
 * @param {number[]}  nums    the number array
 * @return {number}           the length of longest increasing sequence
 */
const lengthOfLIS = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0300 - Longest Increasing Subsequence:');
  [
    [10, 9, 2, 5, 3, 7, 101, 18],
  ].forEach( vs => {
    console.log(`  lis=${lengthOfLIS(vs)} nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
