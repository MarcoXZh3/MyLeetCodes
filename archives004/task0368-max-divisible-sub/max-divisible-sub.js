/**
 * @param {number[]}      nums      the number list
 * @return {number[]}               a max sub set
 */
const largestDivisibleSubset = function(nums) {
  nums = nums.sort( (a,b)=>a-b );
  const cnt = Array(nums.length).fill(1);
  const pre = Array(nums.length).fill(-1);
  let max = 0;
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && cnt[j] + 1 > cnt[i]) {
        cnt[i] = cnt[j] + 1;
        pre[i] = j;
      }
    }
    if (cnt[i] > max) {
      max = cnt[i];
      idx = i;
    }
  }
  const res = [];
  while (idx !== -1) {
    res.unshift(nums[idx]);
    idx = pre[idx];
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0368 - Largest Divisible Subset:');
  [
    [1, 2, 3],
    [1, 2, 4, 8],
  ].forEach( vs => {
    console.log(`  sub=${JSON.stringify(largestDivisibleSubset(vs))}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
