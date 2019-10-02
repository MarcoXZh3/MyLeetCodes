const path = require('path');
const { bucketSort, radixSort } = require(path.resolve('_utils/sorting'));


/**
 * sort and then compare
 * @param {number[]}  nums    the number list
 * @return {number}           the max gap between adjacent numbers in sorted
 */
const maximumGap0 = function(nums) {
  nums = nums.sort( (a,b)=>a-b );
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(Math.abs(nums[i] - nums[i - 1]), max);
  }
  return max;
};


/**
 * bucket sort and then compare
 * @param {number[]}  nums    the number list
 * @return {number}           the max gap between adjacent numbers in sorted
 */
const maximumGap1 = function(nums) {
  nums = bucketSort(nums);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(Math.abs(nums[i] - nums[i - 1]), max);
  }
  return max;
};


/**
 * radix sort and then compare
 * @param {number[]}  nums    the number list
 * @return {number}           the max gap between adjacent numbers in sorted
 */
const maximumGap = function(nums) {
  nums = radixSort(nums);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(Math.abs(nums[i] - nums[i - 1]), max);
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0164 - Maximum Gap:');
  [
    [3, 6, 9, 1],
    [10],
  ].forEach( vs => {
    console.log(`  maxGap=${maximumGap(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
