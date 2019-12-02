/**
 * @param {number[]}    nums1     the 1st group of digits
 * @param {number[]}    nums2     the 2nd group of digits
 * @param {number}      k         the length of the output
 * @return {number[]}             the maximum possible number
 */
const maxNumber = function(nums1, nums2, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0320 - Create Maximum Number:');
  [
    [5, [3, 4, 6, 5], [9, 1, 2, 5, 8, 3]],
    [5, [6, 7], [6, 0, 4]],
    [3, [3, 9], [8, 9]],
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, max=${JSON.stringify(maxNumber(vs[1], vs[2], vs[0]))}`);
    console.log(`  num1=${JSON.stringify(vs[1])}, num2=${JSON.stringify(vs[2])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
