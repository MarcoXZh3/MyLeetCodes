/**
 * linear search
 * @param {number[]}    nums    the number array
 * @return {number}             the index of a peak element
 */
const findPeakElement0 = function(nums) {
  let i = 0;
  while (i < nums.length) {
    if ( (i === 0 || nums[i - 1] < nums[i]) &&
         (i === nums.length - 1 || nums[i] > nums[i + 1]) ) {
      break ;
    }
    i ++;
  }
  return i;
};


/**
 * binary search - recursion
 * @param {number[]}    nums    the number array
 * @return {number}             the index of a peak element
 */
const findPeakElement1 = function(nums) {
  const recursion = (l, r) => {
    const mid = Math.floor((l + r) / 2);
    return l === r ? l : (
              nums[mid] > nums[mid + 1] ? recursion(l, mid) : recursion(mid + 1, r)
           );
  };
  return recursion(0, nums.length - 1);
};


/**
 * binary search - iteration
 * @param {number[]}    nums    the number array
 * @return {number}             the index of a peak element
 */
const findPeakElement = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
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
