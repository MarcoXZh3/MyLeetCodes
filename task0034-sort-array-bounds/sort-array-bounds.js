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
 * @param {number[]}    nums    the number array
 * @param {number}      target  the value to be searched
 * @return {number[]}           the boundary indexes
 */
const searchRange = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0034 - First and Last Position of Element in Sorted Array:');
  [
    [[5, 7, 7, 8, 8, 10], 8],
    [[5, 7, 7, 8, 8, 10], 6],
  ].forEach( vs => {
    console.log(`  idx=[${searchRange(vs[0], vs[1])}], target=${vs[1]} nums=[${vs[0]}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
