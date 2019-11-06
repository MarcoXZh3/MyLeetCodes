/**
 * one to one compare
 * @param {number[]}    nums    the number array
 * @return {number}             the only duplicate in the array
 */
const findDuplicate0 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
  return -1;
};


/**
 * hash set
 * @param {number[]}    nums    the number array
 * @return {number}             the only duplicate in the array
 */
const findDuplicate1 = function(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }
  return -1;
};


/**
 * Floyd's Tortoise and Hare (Cycle Detection)
 * @see Task0142: Linked List Cycle II
 * @param {number[]}    nums    the number array
 * @return {number}             the only duplicate in the array
 */
const findDuplicate = function(nums) {
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);
  let i = nums[0];
  let j = tortoise;
  while (i !== j) {
    i = nums[i];
    j = nums[j];
  }
  return i;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0287 - Find the Duplicate Number:');
  [
    [1, 3, 4, 2, 2],
    [3, 1, 3, 4, 2],
  ].forEach( vs => {
    console.log(`  dup=${findDuplicate(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
