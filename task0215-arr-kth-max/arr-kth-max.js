/**
 * @param {number[]}    nums    the unsorted array
 * @param {number}      k       the k value
 * @return {number}             the kth largest number
 */
const findKthLargest = function(nums, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0215 - Kth Largest Element in an Array:');
  [
    [2, [3, 2, 1, 5, 6, 4]],
    [4, [3, 2, 3, 1, 2, 4, 5, 5, 6]],
  ].forEach( vs => {
    console.log(`  target=${findKthLargest(vs[1], vs[0])}, k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
