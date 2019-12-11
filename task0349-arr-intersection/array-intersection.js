/**
 * @param {number[]}      nums1     the 1st number list
 * @param {number[]}      nums2     the 2nd number list
 * @return {number[]}               the intersection
 */
const intersection = function(nums1, nums2) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0349 - Intersection of Two Arrays:');
  [
    [ [1, 2, 2, 1], [2, 2] ],
    [ [4, 9, 5], [9, 4, 9, 8, 4] ],
  ].forEach( vs => {
    console.log(`  nums1=${JSON.stringify(vs[0])}, nums2=${JSON.stringify(vs[1])}`);
    console.log(`  intersection=${JSON.stringify(intersection(vs[0], vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
