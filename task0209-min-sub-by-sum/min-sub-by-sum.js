/**
 * brutal force
 * @param {number}      s       the sum
 * @param {number[]}    nums    the number array
 * @return {number}             length of the minimum sub array
 */
const minSubArrayLen0 = function(s, nums) {
  if (nums.length === 0) {
    return 0;
  }
  let re = Number.MAX_SAFE_INTEGER;
  const sums = Array(nums.length).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = sums[j] - sums[i] + nums[i];
      if (sum >= s) {
        re = Math.min(re, j - i + 1);
        break ;
      }
    }
  }
  return re !== Number.MAX_SAFE_INTEGER ? re : 0;
};


/**
 * O(n) linear search and shrink
 * @param {number}      s       the sum
 * @param {number[]}    nums    the number array
 * @return {number}             length of the minimum sub array
 */
const minSubArrayLen = function(s, nums) {
  let l = 0;
  let r = 0;
  let sum = 0;
  let re = Number.MAX_SAFE_INTEGER;
  while (r < nums.length) {
    sum += nums[r ++];
    while (sum >= s) {
      re = Math.min(re, r - l);
      sum -= nums[l ++];
    }
  }
  return re === Number.MAX_SAFE_INTEGER ? 0 : re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0209 - Minimum Size Subarray Sum:');
  [
    [7, [2, 3, 1, 2, 4, 3]],
    [11, [1, 2, 3, 4, 5]],
  ].forEach( vs => {
    console.log(`  min=${minSubArrayLen(vs[0], vs[1])}, sum=${vs[0]}, nums=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
