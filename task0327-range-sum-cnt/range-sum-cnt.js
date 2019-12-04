/**
 * brutal force
 * @param {number[]}    nums      the number array
 * @param {number}      lower     the minimum range sum
 * @param {number}      upper     the maximum range sum
 * @return {number}               how many valid ranges
 */
const countRangeSum0 = function(nums, lower, upper) {
  let re = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      re += sum >= lower && sum <= upper ? 1 : 0;
    }
  }
  return re;
};


/**
 * @param {number[]}    nums      the number array
 * @param {number}      lower     the minimum range sum
 * @param {number}      upper     the maximum range sum
 * @return {number}               how many valid ranges
 */
const countRangeSum = function(nums, lower, upper) {
  const countWhileMergeSort = (start, end) => {
    if (end - start <= 1) {
      return 0;
    }
    const mid = Math.floor((start + end) / 2);
    let re = countWhileMergeSort(start, mid) + countWhileMergeSort(mid, end);
    let j = mid;
    let k = mid;
    let t = mid;
    const cache = Array(end - start).fill(0);
    for (let i = start, r = 0; i < mid; i++, r++) {
      while (k < end && sums[k] - sums[i] < lower) {
        k ++;
      }
      while (j < end && sums[j] - sums[i] <= upper) {
        j ++;
      }
      while (t < end && sums[t] < sums[i]) {
        cache[r ++] = sums[t ++];
      }
      cache[r] = sums[i];
      re += j - k;
    }
    for (let i = 0; i < t - start; i++) {
      sums[start + i] = cache[i];
    }
    return re;
  };
  const n = nums.length;
  const sums = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }
  return countWhileMergeSort(0, n + 1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0327 - Count of Range Sum:');
  [
    [-2, 2, [-2, 5, -1]],
  ].forEach( vs => {
    const cnt = countRangeSum(vs[2], vs[0], vs[1]);
    console.log(`  cnt=${cnt}, min=${vs[0]}, max=${vs[1]}, nums=${JSON.stringify(vs[2])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
