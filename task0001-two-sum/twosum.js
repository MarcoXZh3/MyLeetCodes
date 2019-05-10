/**
 * Two sum: brutal force of two-level nested iterations
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};


/**
 * Two sum: hash map plus search
 * trade speed with space
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum2 = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[`${nums[i]}`] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (obj[`${num}`] >= 0) {
      return [i, obj[`${num}`]];
    }
  }
  return [];
};


/**
 * Two sum: hash map while search
 * trade speed with space
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum3 = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (obj[`${num}`] >= 0) {
      return [i, obj[`${num}`]];
    }
    obj[`${nums[i]}`] = i;
  }
  return [];
};


module.exports = twoSum3;
