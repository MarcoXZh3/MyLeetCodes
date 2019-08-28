/**
 * standard version of binary search
 * @param {object[]}  objs    the sorted array of objects
 * @param {object}    target  the target object to search
 * @param {integer}   start   the left boundary index, inclusive
 * @param {integer}   end     the right boundary index, inclusive
 * @returns {integer}         index of the object in the array, or -1 if not in
 */
const binarySearch = function(objs, target, start, end) {
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target < objs[middle]) {
      end = middle - 1;
    } else if (target > objs[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
  };
  return -1;
};


/**
 * do binary search on the rotated sorted array
 * @param {number[]}  nums      the rotated sorted array
 * @param {number}    target    the target value to search
 * @param {number}    start     the left boundary index, inclusive
 * @param {number}    end       the right boundary index, inclusive
 * @return {number}             index of the target in the array or -1 if not in
 */
const binarySearchRotated = function(nums, target, start, end) {
  // terminate condition of recursion
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);
  if (target === nums[middle]) {
    return middle;
  }
  if (target < nums[middle]) {          // goes to left half
    // if this half is rotated, the other must not, do standard b-search of it
    if (nums[start] > nums[middle - 1]) {
      const re = binarySearch(nums, target, middle + 1, end);
      return re > -1 ? re : binarySearchRotated(nums, target, start, middle - 1);
    } else {
      const re = binarySearch(nums, target, start, middle - 1);
      return re > -1 ? re : binarySearchRotated(nums, target, middle + 1, end);
    }
  } else {  // target > nums[middle]    // goes to right half
    // if this half is rotated, the other must not, do standard b-search of it
    if (nums[middle + 1] > nums[end]) {
      const re = binarySearch(nums, target, start, middle - 1);
      return re > -1 ? re : binarySearchRotated(nums, target, middle + 1, end);
    } else {
      const re = binarySearch(nums, target, middle + 1, end);
      return re > -1 ? re : binarySearchRotated(nums, target, start, middle - 1);
    }
  }
};


/**
 * recursion: if this half is sorted then standard b-search, otherwise rotate-search
 * @param {number[]}  nums      the rotated sorted array
 * @param {number}    target    the target value to search
 * @return {number}             index of the target in the array or -1 if not in
 */
const search = function(nums, target) {
  return binarySearchRotated(nums, target, 0, nums.length - 1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0033 - Search in Rotated Sorted Array:');
  [
    [[4, 5, 6, 7, 0, 1, 2], 0],
    [[4, 5, 6, 7, 0, 1, 2], 3],
    [[1, 3], 0],
    [[1, 3], 1],
    [[6, 7, 1, 2, 3, 4, 5], 6],
  ].forEach( vs => {
    console.log(`  idx=${search(vs[0], vs[1])}, target=${vs[1]} nums=[${vs[0]}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
