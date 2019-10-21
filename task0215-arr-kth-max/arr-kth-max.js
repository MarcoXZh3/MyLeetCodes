/**
 * bubble sort
 * @param {number[]}    nums    the unsorted array
 * @param {number}      k       the k value
 * @return {number}             the kth largest number
 */
const findKthLargest0 = function(nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        const tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
      }
    }
  }
  return nums[k - 1];
};


/**
 * max heap
 * @param {number[]}    nums    the unsorted array
 * @param {number}      k       the k value
 * @return {number}             the kth largest number
 */
const findKthLargest = function(nums, k) {
  const heapify = (p, boundary) => {
    let target = p;
    let idx = 2 * p + 1;
    if (idx < boundary && nums[target] < nums[idx]) {
      target = idx;
    }
    idx ++;
    if (idx < boundary && nums[target] < nums[idx]) {
      target = idx;
    }
    if (target !== p) {
      const tmp = nums[target];
      nums[target] = nums[p];
      nums[p] = tmp;
      heapify(target, boundary);
    }
  };

  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(i, nums.length);
  }
  for (let i = nums.length - 1; i > nums.length - k; i--) {
    const tmp = nums[0];
    nums[0] = nums[i];
    nums[i] = tmp;
    heapify(0, i);
  }
  return nums[0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0215 - Kth Largest Element in an Array:');
  [
    [2, [3, 2, 1, 5, 6, 4]],
    [4, [3, 2, 3, 1, 2, 4, 5, 5, 6]],
  ].forEach( vs => {
    console.log(`  target=${findKthLargest(vs[1], vs[0])}, k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
