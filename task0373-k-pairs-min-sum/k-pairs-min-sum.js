/**
 * @param {number[]}      nums1     the 1st number array
 * @param {number[]}      nums2     the 2nd number array
 * @param {number}        k         the number of pairs to grab
 * @return {number[][]}             the number pairs
 */
const kSmallestPairs = function(nums1, nums2, k) {

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
