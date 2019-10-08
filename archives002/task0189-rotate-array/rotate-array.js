/**
 * rotate 1 element per iteration
 * @param {number[]}    nums    the number array to rotate
 * @param {number}      k       how many times to rotate
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate0 = function(nums, k) {
  k %= nums.length;
  while (k -- > 0) {
    const val = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = val;
  }
};


/**
 * rotate k elements in 1 iteration
 * @param {number[]}    nums    the number array to rotate
 * @param {number}      k       how many times to rotate
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate1 = function(nums, k) {
  k %= nums.length;
  const parts = nums.slice(nums.length - k);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < k) {
      nums[i] = parts[i];
    } else {
      nums[i] = nums[i - k];
    }
  }
};


/**
 * cyclic swap
 * @param {number[]}    nums    the number array to rotate
 * @param {number}      k       how many times to rotate
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate2 = function(nums, k) {
  k %= nums.length;
  for (let start = 0, cnt = 0; cnt < nums.length; start ++) {
    let cur = start;
    let num1 = nums[start];
    do {
      let next = (cur + k) % nums.length;
      let num2 = nums[next];
      nums[next] = num1;
      num1 = num2;
      cur = next;
      cnt ++;
    } while (start !== cur);
  }
};


/**
 * reversing array
 * @param {number[]}    nums    the number array to rotate
 * @param {number}      k       how many times to rotate
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  const reverse = (arr, i, j) => {
    while (i < j) {
      const tmp = arr[i];
      arr[i++] = arr[j];
      arr[j--] = tmp;
    }
  };

  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0189 - Rotate Array:');
  [
    [3, [1, 2, 3, 4, 5, 6, 7]],
    [2, [-1, -100, 3, 99]],
    [3, [1, 2]],
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
    rotate(vs[1], vs[0]);
    console.log(`  rotated=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
