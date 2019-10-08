/**
 * linear search
 * @param {number[]}  nums    the rotated number array
 * @return {number}           the minimum number in array
 */
const findMin0 = function(nums) {
  let re = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      re = nums[i];
      break ;
    }
  }
  return re;
};


/**
 * binary search
 * @param {number[]}  nums    the rotated number array
 * @return {number}           the minimum number in array
 */
const findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] < nums[r]) {
      return nums[l];
    }
    const m = Math.floor((l + r) / 2);
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0153 - Find Minimum in Rotated Sorted Array:');
  [
    [3, 4, 5, 1, 2],
    [4, 5, 6, 7, 0, 1, 2],
  ].forEach( vs => {
    console.log(`  min=${findMin(vs)}, arr=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
