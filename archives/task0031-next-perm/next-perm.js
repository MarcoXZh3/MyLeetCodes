/**
 * swap the given two element from the array
 * @param {number[]}  nums  the numbers
 * @param {number}    i     the index of the 1st element
 * @param {number}    j     the index of the 2nd element
 */
const swap = function(nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};


/**
 * reverse the given part of the array
 * @param {number[]}  nums  the numbers
 * @param {number}    i     the index of start element
 * @param {number}    j     the index of end element
 */
const reverse = function(nums, start, end) {
  while (start < end) {
    const tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
};


/**
 * find the next permutation
 * @param {number[]} nums   the numbers to be re-ordered
 * @return {void}           do not return anything - modify it in-place instead
 */
const nextPermutation = function(nums) {
  // don't do anything if no permutations available at all
  if (nums.length < 2) {
    return ;
  }

  // find the first pair in ascending order from end, use the smaller as pivot
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  // if found, find the first element larger than the pivot, and swap them
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  // for the rest of the array, simply reverse them
  reverse(nums, i + 1, nums.length - 1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0031 - Next Permutation:');
  [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 5],
  ].forEach( vs => {
    const bk = vs.slice();
    nextPermutation(vs);
    console.log(`  num=[${bk.join(', ')}], next=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
