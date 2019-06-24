/**
 * @param {number[]}  nums      the rotated sorted array
 * @param {number}    target    the target value to search
 * @return {number}             index of the target in the array or -1 if not in
 */
const search = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0033 - Search in Rotated Sorted Array:');
  [
    [[4, 5, 6, 7, 0, 1, 2], 0],
    [[4, 5, 6, 7, 0, 1, 2], 3],
  ].forEach( vs => {
    console.log(`  idx=${search(vs[0], vs[1])}, target=${vs[1]} nums=[${vs[0]}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
