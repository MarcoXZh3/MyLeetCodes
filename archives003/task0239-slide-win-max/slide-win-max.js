/**
 * basic idea: get max of every windows
 * @param {number[]}      nums    the number array
 * @param {number}        k       the window size
 * @return {number[]}             the array of max in the windows
 */
const maxSlidingWindow0 = function(nums, k) {
  const res = [];
  for (let i = 0; nums.length > 0 && i <= nums.length - k; i++) {
    res.push(Math.max(...nums.slice(i, i + k)));
  }
  return res;
};


/**
 * @param {number[]}      nums    the number array
 * @param {number}        k       the window size
 * @return {number[]}             the array of max in the windows
 */
const maxSlidingWindow1 = function(nums, k) {
  if (!nums || nums.length === 0 || k <= 0) {
    return [];
  }
  let n = nums.length;
  const maxLs = Array(n).fill(0);
  const maxRs = Array(n).fill(0);
  maxLs[0] = nums[0];
  maxRs[n - 1] = nums[n - 1];
  for (let i = 1; i < n; i++) {
    maxLs[i] = i % k === 0 ? nums[i] : Math.max(maxLs[i - 1], nums[i]);
    const j = n - i - 1;
    maxRs[j] = j % k === 0 ? nums[j] : Math.max(maxRs[j + 1], nums[j]);
  }
  const res = Array(n - k + 1).fill(0);
  for (let i = 0, j = 0; i + k <= n; i++) {
    res[j ++] = Math.max(maxLs[i + k - 1], maxRs[i]);
  }
  return res;
};


/**
 * @param {number[]}      nums    the number array
 * @param {number}        k       the window size
 * @return {number[]}             the array of max in the windows
 */
const maxSlidingWindow = function(nums, k) {
  const dq = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (dq.length > 0 && dq[0] === i - k) {
      dq.shift();
    }
    while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[i]) {
      dq.pop();
    }
    dq.push(i);
    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0239 - Sliding Window Maximum:');
  [
    [3, [1, 3, -1, -3, 5, 3, 6, 7]],
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
    console.log(`  res=[${maxSlidingWindow(vs[1], vs[0]).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
