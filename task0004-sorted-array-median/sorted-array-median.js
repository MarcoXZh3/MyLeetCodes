/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0004 - Median of Two Sorted Arrays:');
  [
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
