/**
 * hash map
 * @param {number[]}    nums    the number array
 * @return {number}             the majority element
 */
const majorityElement0 = function(nums) {
  const map = {};
  let max = -1;
  let target = null;
  for (let num of nums) {
    map[`${num}`] = (map[`${num}`] || 0) + 1;
    if (map[`${num}`] > max) {
      max = map[`${num}`];
      target = num;
    }
  }
  return target;
};


/**
 * sort and get the median
 * @param {number[]}    nums    the number array
 * @return {number}             the majority element
 */
const majorityElement1 = function(nums) {
  if (!nums || nums.length === 0) {
    return null;
  }
  return nums.slice().sort( (a,b)=>a-b )[Math.floor(nums.length / 2)];
};


/**
 * Boyer-Moore Voting Algorithm
 * @see: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
 * @param {number[]}    nums    the number array
 * @return {number}             the majority element
 */
const majorityElement = function(nums) {
  let count = 0;
  let target = null;
  for (let num of nums) {
      if (count === 0) {
          target = num;
      }
      count += (num === target) ? 1 : -1;
  }
  return target;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0169 - Majority Element:');
  [
    [3,2,3],
    [2, 2, 1, 1, 1, 2, 2],
  ].forEach( vs => {
    console.log(`  target=${majorityElement(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
