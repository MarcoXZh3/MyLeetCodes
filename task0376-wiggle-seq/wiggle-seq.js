/**
 * @param {number[]}      nums      the number array
 * @return {number}                 the max length of wiggle sequences
 */
const wiggleMaxLength0 = function(nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  const up = Array(n).fill(0);
  const down = Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        up[i] = Math.max(up[i], down[j] + 1);
      } else if (nums[i] < nums[j]) {
        down[i] = Math.max(down[i], up[j] + 1);
      }
    }
  }
  return 1 + Math.max(down[n - 1], up[n - 1]);
};


/**
 * @param {number[]}      nums      the number array
 * @return {number}                 the max length of wiggle sequences
 */
const wiggleMaxLength1 = function(nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  const up = Array(n).fill(0);
  const down = Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1;
      down[i] = down[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      down[i] = up[i - 1] + 1;
      up[i] = up[i - 1];
    } else {
      down[i] = down[i - 1];
      up[i] = up[i - 1];
    }
  }
  return 1 + Math.max(down[n - 1], up[n - 1]);
};


/**
 * @param {number[]}      nums      the number array
 * @return {number}                 the max length of wiggle sequences
 */
const wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  let up = 1;
  let down = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }
  return Math.max(up, down);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0376 - Wiggle Subsequence:');
  [
    [1, 7, 4, 9, 2, 5],
    [1, 17, 5, 10, 13, 15, 10, 5, 16, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ].forEach( vs => {
    console.log(`  max=${wiggleMaxLength(vs)}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
