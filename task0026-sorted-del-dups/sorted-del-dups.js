/**
 * @param {number[]}    nums    the sorted array of numbers
 * @return {number}             the length of the non-duplicated array
 */
const removeDuplicates = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0026 - Remove Duplicates from Sorted Array:');
  [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
  ].forEach( vs => {
    const length = removeDuplicates(vs);
    console.log(`  list=[${vs}], n=${length}`);
    console.log(`  newL=[${vs.slice(0, length)}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
