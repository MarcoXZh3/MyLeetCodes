/**
 * @param {number[]}    nums      the number array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes0 = function(nums) {
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      const tmp = nums[j];
      nums[j] = nums[i];
      nums[i ++] = tmp;
    }
  }
};


/**
 * @param {number[]}    nums      the number array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i ++] = nums[j];
    }
  }
  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0283 - Move Zeroes:');
  [
    [0, 1, 0, 3, 12],
  ].forEach( vs => {
    const bk = vs.slice();
    moveZeroes(vs);
    console.log(`  nums=[${bk.join(', ')}], moved=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
