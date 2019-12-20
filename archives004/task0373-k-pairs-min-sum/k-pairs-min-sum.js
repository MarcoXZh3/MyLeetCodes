const path = require('path');
const { PriorityQueue } = require(path.resolve('_utils/priority-queue'));


/**
 * @param {number[]}      nums1     the 1st number array
 * @param {number[]}      nums2     the 2nd number array
 * @param {number}        k         the number of pairs to grab
 * @return {number[][]}             the number pairs
 */
const kSmallestPairs = function(nums1, nums2, k) {
  if (nums1.length * nums2.length * k === 0) {
    return [];
  }
  const res = [];
  const pq = new PriorityQueue(compare = (a,b)=>a[0]+a[1]-b[0]-b[1] );
  for (let i = 0; i < nums1.length && i < k; i++) {
    pq.enqueue([nums1[i], nums2[0], 0]);
  }
  while (k -- > 0 && pq.size() > 0) {
    cur = pq.dequeue();
    res.push([cur[0], cur[1]]);
    if (cur[2] === nums2.length - 1) {
      continue ;
    }
    pq.enqueue([cur[0], nums2[cur[2] + 1], cur[2] + 1]);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0373 - Find K Pairs with Smallest Sums:');
  [
    [ [1, 7, 11], [2, 4, 6], 3],
    [ [1, 1, 2], [1, 2, 3], 2],
    [ [1, 2], [3], 3],
  ].forEach( vs => {
    console.log(`  nums1=${JSON.stringify(vs[0])}, nums2=${JSON.stringify(vs[1])}, k=${vs[2]}`);
    console.log(`  pairs=${JSON.stringify(kSmallestPairs(...vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
