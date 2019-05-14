/**
 * drop the smallest number until median positions are covered,
 * then use the latest dropped 1 or 2 numbers for median calculation
 * @param {number[]} nums1    the first sorted array
 * @param {number[]} nums2    the second sorted array
 * @return {number}           median of the concatenated arrays
 */
const findMedianSortedArrays = function(nums1, nums2) {
  // the median's position (2nd)
  const len1 = nums1.length;
  const len2 = nums2.length;
  const mdIdx = Math.floor((len1 + len2) / 2);
  let min = null;
  let max = null;

  // loop the two arrays until the median's position is reached
  let cnt = 0;
  while (cnt ++ <= mdIdx) {
    // locate next number
    let next;
    // if next of one array is not available, chose next from the other array
    if (nums1.length === 0) {
      next = nums2[0];
      nums2.shift();
    } else if (nums2.length === 0) {
      next = nums1[0];
      nums1.shift();
    } else {                      // if next of both available, use the samller
      next = nums1[0] < nums2[0] ? nums1[0] : nums2[0];
      (nums1[0] < nums2[0] ? nums1 : nums2).shift();
    }

    // update min/max by the next if needed
    if (max === null) {
      max = next;
    } else if (next > max) {
      min = max;
      max = next;
    } else if (next > min) {
      min = next;
    }
  }
  return (len1 + len2) % 2 === 1 ? max : (min + max) / 2;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0004 - Median of Two Sorted Arrays:');
  [
    [ [3], [-2, -1] ],
    [ [], [1] ],
    [ [1, 3], [2] ],
    [ [1, 2], [3, 4] ],
  ].forEach( (arrs) => {
    const nums1 = arrs[0];
    const nums2 = arrs[1];
    console.log(`  nums1=[${nums1}]; nums2=[${nums2}]`);
    console.log(`  median=${findMedianSortedArrays(nums1, nums2)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
