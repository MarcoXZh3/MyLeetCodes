/**
 * @param {number[]}  nums      the rotated sorted array
 * @param {number}    target    the target value to search
 * @return {boolean}            whether found or not
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[left] === nums[mid]) {
        left ++;
      }
      if (nums[right] === nums[mid]) {
        right --;
      }
    }
  }
  return nums[left] === target;
};

/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0081 - Search in Rotated Sorted Array II:');
  [
    [[2, 5, 6, 0, 0, 1, 2], 0],
    [[2, 5, 6, 0, 0, 1, 2], 3],
    [[1, 1, 1, 1, 1, 1, 2, 1, 1, 1], 2],  // solution of Task 33 won't work
  ].forEach( vs => {
    console.log(`  found=${search(vs[0], vs[1])}, target=${vs[1]}, nums=[${vs[0].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
