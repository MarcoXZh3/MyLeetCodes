/**
 * sort and count: O_sort(n) + O(n - 1)
 * @param {number[]} nums   the number array
 * @return {number}         length of the longest consecutive sequence
 */
const longestConsecutive0 = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums = nums.slice().sort( (a,b)=>a-b );
  let max = 1;
  let cur = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 0) {
      continue ;
    } else if (nums[i] - nums[i - 1] === 1) {
      cur ++;
    } else {
      max = Math.max(max, cur);
      cur = 1;
    }
  }
  return Math.max(max, cur);
};


/**
 * hash set
 * @param {number[]} nums   the number array
 * @return {number}         length of the longest consecutive sequence
 */
const longestConsecutive1 = function(nums) {
  const map = {};
  for (let num of nums) {
    map[`${num}`] = 1;
  }
  let max = 0;
  for (let key in map) {
    let num = parseInt(key, 10);
    if (map[`${num - 1}`]) {
      continue ;
    }
    let cur = 1;
    while(map[`${num ++ + 1}`]) {
      cur ++;
    }
    max = Math.max(max, cur);
  }
  return max;
};


/**
 * hash map: O(n)
 * @param {number[]} nums   the number array
 * @return {number}         length of the longest consecutive sequence
 */
const longestConsecutive = function(nums) {
  let max = 0;
  const map = {};
  for (let num of nums) {
    if (map[`${num}`]) {
      continue ;
    }

    let left = map[`${num - 1}`] || 0;
    let right = map[`${num + 1}`] || 0;
    const sum = left + right + 1;
    map[`${num - left}`] = sum;
    map[`${num + right}`] = sum;
    map[`${num}`] = sum;
    max = Math.max(max, sum);
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0128 - Longest Consecutive Sequence:');
  [
    [100, 4, 200, 1, 3, 2],
    [0, -1],
    [0, 1, 0, 2],
  ].forEach( vs => {
    console.log(`  length=${longestConsecutive(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
