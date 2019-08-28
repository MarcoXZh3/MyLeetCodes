/**
 * maintain all gap sectors, where the left of the 1st gap is the target
 * @param {number[]}    nums    the list with missing positive number
 * @return {number}             the missing positive number
 */
const firstMissingPositive1 = function(nums) {
  // all the gaps
  const gaps = [
    [1, Number.MAX_SAFE_INTEGER],     // left inclusive, right exclusive
  ];

  //  check every value
  for (let n of nums) {
    if (n <= 0) {           // skip non-positives
      continue ;
    }

    // find the gap that the current number sits in
    let i = -1;
    while (true) {
      i++;
      if (i >= gaps.length) {
        break ;
      }
      const left = gaps[i][0];
      const right = gaps[i][1];
      if (left > n || right <= n) {
        continue ;
      }

      // found the target gap
      gaps.splice(i--, 1);              // 1: remove the old gap
      if (left !== n) {                 // 2: keep left half if not an empty gap
        gaps.splice(++i, 0, [left, n]);
      }

      if (n + 1 !== right) {            // 3: keep right half if not empty
        gaps.splice(++i, 0, [n + 1, right]);
      }
      break ;
    }
    // console.log(n, JSON.stringify(gaps));
  }
  // the left value of the first gap is the target
  return gaps[0][0];
};


/**
 * straight forward: heap-based sort and find
 * @param {number[]}    nums    the list with missing positive number
 * @return {number}             the missing positive number
 */
const firstMissingPositive2 = function(nums) {
  // build a min heap since we are looking for the smallest possible positive
  const heap = [];
  for (let num of nums) {
    if (num <= 0) {   // skip non-positives
      continue ;
    }
    heap.push(num);
    let c = heap.length - 1;
    let p = Math.floor((c - 1) / 2);
    while (p >= 0 && heap[p] > heap[c]) {
      const tmp = heap[p];
      heap[p] = heap[c];
      heap[c] = tmp;
      c = p;
      p = Math.floor((c - 1) / 2);
    }
  }

  // check the min value of heap sort result
  let missing = 1;
  for (let i = heap.length - 1; i >= 0; i--) {
    if (heap[0] > missing) {
      break ;
    } else if (heap[0] === missing) {
      missing ++;
    }
    heap[0] = heap[i];
    // heapify after swapping final leaf and root
    let p = 0;
    let l = 2 * p + 1;
    while (l < i) {
      let r = l + 1;
      let max = r < i && heap[l] > heap[r] ? r : l;
      if (heap[p] > heap[max]) {
        const tmp = heap[p];
        heap[p] = heap[max];
        heap[max] = tmp;
        p = max;
        l = 2 * p + 1;
      } else {
        break ;
      }
    }
  }
  return missing;
};


/**
 * move each number i to its corresponding index, i-1, then find 1st mismatch
 * @param {number[]}    nums    the list with missing positive number
 * @return {number}             the missing positive number
 */
const firstMissingPositive = function(nums) {
  // the first missing positive number must be in [1, nums.length]
  for (let i = 0; i < nums.length; i++) {
    const idx = nums[i] - 1;
    // skip if already in position or beyond scope
    if (idx < 0 || idx >= nums.length || nums[idx] === nums[i]) {
      continue ;
    }
    // otherwise swap it and the number at its position
    const tmp = nums[i];
    nums[i] = nums[idx];
    nums[idx] = tmp;
    // check the number at this position again since it's swapped
    i--;
  }

  // now all those numbers whose indexes are within scope are correctly placed
  let missing = 0;
  while (missing < nums.length && nums[missing] === missing + 1) {
    missing ++;
  }
  return missing + 1;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0041 - First Missing Positive:');
  [
    [1, 2, 0],
    [3, 4, -1, 1],
    [7, 8, 9, 11, 12],
    [1, 1],
    [1, 2, 3],
    [4, 1, 2, 3],
    [0, 2, 2, 1, 1],
  ].forEach( vs => {
    console.log(`  re=${firstMissingPositive(vs)}; nums=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
