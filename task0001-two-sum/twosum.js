/**
 * Two sum: brutal force of two-level nested iterations
 * @param {number[]}  nums      the input array of numbers
 * @param {number}    target    the target sum to search
 * @return {number[]}           the indexes of the two numbers
 */
const twoSum1 = function(nums, target) {
  // brutal force to check every combination
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
  // first create a hash map
  for (let i = 0; i < nums.length; i++) {
    obj[`${nums[i]}`] = i;
  }
  // then search target using the hash map
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
const twoSum = function(nums, target) {
  const obj = {};
  // create a hash map
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    // search target at the same time: return if found
    if (obj[`${num}`] >= 0) {
      return [i, obj[`${num}`]];
    }
    // keep creating the hash map if not found
    obj[`${nums[i]}`] = i;
  }
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0001 - Two Sum:');
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(`  target=${target}, nums=[${nums}]`);
  console.log(`  result=[${twoSum(nums, target)}]`);
  if (callback) {
    callback();
  }
};


module.exports = main;
