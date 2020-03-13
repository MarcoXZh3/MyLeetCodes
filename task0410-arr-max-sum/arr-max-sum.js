/**
 * dynamic programming
 * @param {number[]}    nums    the number array
 * @param {number}      m       how many to split
 * @return {number}             the max sum
 */
const splitArray0 = function(nums, m) {
  const n = nums.length;
  const sums = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }
  const dp = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = sums[n] - sums[i];
  }
  for (let s = 1; s < m; s++) {
    for (let i = 0; i < n - s; i++) {
      dp[i] = Number.MAX_SAFE_INTEGER;
      for (let j = i + 1; j <= n - s; j++) {
        const t = Math.max(dp[j], sums[j] - sums[i]);
        if (t <= dp[i]) {
          dp[i] = t;
        } else {
          break ;
        }
      }
    }
  }
  return dp[0];
};


/**
 * binary search
 * @param {number[]}    nums    the number array
 * @param {number}      m       how many to split
 * @return {number}             the max sum
 */
const splitArray = function(nums, m) {
  const valid = (target) => {
    let cnt = 1;
    let total = 0;
    for (let num of nums) {
      total += num;
      if (total > target) {
        total = num;
        if (++ cnt > m) {
          return false;
        }
      }
    }
    return true;
  };

  let max = 0;
  let sum = 0;
  for (let num of nums) {
    max = Math.max(num, max);
    sum += num;
  }
  if (m === 1) {
    return sum;
  }
  let l = max;
  let r = sum;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    valid(mid) ? r = mid - 1 : l = mid + 1;
  }
  return l;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0410 - Split Array Largest Sum:');
  [
    [[7,2,5,10,8], 2],
  ].forEach( vs => {
    console.log(`  arr=${JSON.stringify(vs[0])}, m=${vs[1]}; max=${splitArray(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
