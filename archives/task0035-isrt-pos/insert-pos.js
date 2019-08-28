/**
 * linear search
 * @param {number[]}    nums      the sorted array
 * @param {number}      target    the value to search
 * @return {number}               element position or insert position
 */
const searchInsert1 = function(nums, target) {
  let idx = 0;
  for (; idx < nums.length; idx++) {
    if (nums[idx] >= target) {
      break ;
    }
  }
  return idx;
};


/**
 * binary search
 * @param {number[]}    nums      the sorted array
 * @param {number}      target    the value to search
 * @return {number}               element position or insert position
 */
const searchInsert = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m;
  let greater = 0;    // whether target is greater than the median
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (target < nums[m]) {
      r = m - 1;
      greater = 0;
    } else if (target > nums[m]) {
      l = m + 1;
      greater = 1;
    } else {
      return m;
    }
  }
  // the target position will be the median or its next when target is greater
  return m + greater;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0035 - Search Insert Position:');
  [
    [[1, 3, 5, 6], 5],
    [[1, 3, 5, 6], 2],
    [[1, 3, 5, 6], 7],
    [[1, 3, 5, 6], 0],
  ].forEach( vs => {
    console.log(`  idx=[${searchInsert(vs[0], vs[1])}], target=${vs[1]} nums=[${vs[0]}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
