/**
 * @param {number[]}  nums1     the 1st array
 * @param {number}    m         length of the 1st array
 * @param {number[]}  nums2     the 2nd array
 * @param {number}    n         length of the 2nd array
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  m--;
  n--;
  let i = m + n + 1;
  while (i >= 0) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[i] = nums1[m--];
    } else {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0088 - Merge Sorted Array:');
  [
    [
      [[1, 2, 3, 0, 0, 0], 3],
      [[2, 5, 6], 3],
    ],
  ].forEach( vs => {
    console.log(`  nums1=[${vs[0][0].join(', ')}]; nums2=[${vs[1][0].join(', ')}]`);
    merge(vs[0][0], vs[0][1], vs[1][0], vs[1][1]);
    console.log(`  nums1=[${vs[0][0].join(', ')}] after merged`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
