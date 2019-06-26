/**
 * @param {number[]}    nums      the sorted array
 * @param {number}      target    the value to search
 * @return {number}               element position or insert position
 */
const searchInsert = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0035 - Search Insert Position:');
  [
    [[1, 3, 5, 6], 5],
    [[1, 3, 5, 6], 2],
    [[1, 3, 5, 6], 7],
    [[1, 3, 5, 6], 0],
  ].forEach( vs => {
    console.log(`  idx=[${searchInsert(vs[0], vs[1])}], target=${vs[1]} nums=[${vs[0]}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
