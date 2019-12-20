/**
 * @param {number[]}    nums    the number array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort0 = function(nums) {
  const n = nums.length;
  const m = (n + 1) >> 1;
  const copy = nums.slice().sort( (a,b)=>a-b );
  for (let i = m - 1, j = 0; i >= 0; i--, j += 2) {
    nums[j] = copy[i];
  }
  for (let i = n - 1, j = 1; i >= m; i--, j += 2) {
    nums[j] = copy[i];
  }
};


/**
 * @param {number[]}    nums    the number array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {
  const get = (i) => (2 * i + 1) % (n | 1);
  const swap = (i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };
  const kthSmallest = function(arr, k) {
    return k < arr.length ? arr.slice().sort( (a,b)=>a-b )[k] : null;
  };

  const n = nums.length;
  const m = kthSmallest(nums, (n + 1) >> 1);
  let i = 0;
  let j = 0;
  let k = n - 1;
  while (j <= k) {
    if (nums[get(j)] > m) {
      swap(get(i ++), get(j ++));
    } else if (nums[get(j)] < m) {
      swap(get(j), get(k --));
    } else {
      j ++;
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0324 - Wiggle Sort II:');
  [
    [1, 5, 1, 1, 6, 4],
    [1, 3, 2, 2, 3, 1],
  ].forEach( vs => {
    bk = vs.slice();
    wiggleSort(vs);
    console.log(`  nums=${JSON.stringify(bk)}, wiggle=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
