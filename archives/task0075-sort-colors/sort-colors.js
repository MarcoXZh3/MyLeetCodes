/**
 * bubble sort
 * @param {number[]}    nums    the number list representing colors
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors0 = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }
};


/**
 * O(2n)
 * @param {number[]}    nums    the number list representing colors
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors1 = function(nums) {
  const cnt = [0, 0, 0];
  for (let i  = 0; i < nums.length; i++) {
    cnt[nums[i]] ++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < cnt[0]) {
      nums[i] = 0;
    } else if (i >= nums.length - cnt[2]) {
      nums[i] = 2;
    } else {
      nums[i] = 1;
    }
  }
};


/**
 * O(n)
 * @param {number[]}    nums    the number list representing colors
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors2 = function(nums) {
  let zero = 0;
  let two = nums.length - 1;
  for (let i = 0; i <= two; i++) {
    while (nums[i] === 2 && i < two) {
      const tmp = nums[i];
      nums[i] = nums[two];
      nums[two--] = tmp;
    }
    while (nums[i] === 0 && i > zero) {
      const tmp = nums[i];
      nums[i] = nums[zero];
      nums[zero++] = tmp;
    }
  }
};


/**
 * O(n)
 * @param {number[]}    nums    the number list representing colors
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  let zero = 0;
  let two = nums.length - 1;
  for (let i = 0; i <= two; i++) {
    if (nums[i] === 0 && i !== zero) {
      const tmp = nums[i];
      nums[i--] = nums[zero];
      nums[zero++] = tmp;
    } else if (nums[i] === 2 && i !== two) {
      const tmp = nums[i];
      nums[i--] = nums[two];
      nums[two--] = tmp;
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0075 - Sort Colors:');
  [
    [2, 0, 2, 1, 1, 0],
  ].forEach( vs => {
    console.log(`  raw=[${vs.join(', ')}]`);
    sortColors(vs);
    console.log(`  raw=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
