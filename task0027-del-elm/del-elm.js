/**
 * @param {number[]}    nums    the sorted array of numbers
 * @param {number}      val     the value to be removed
 * @return {number}             the length of the non-duplicated array
 */
const removeElement = function(nums, val) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0027 - Remove Element:');
  [
    [ [3, 2, 2, 3], 3],
    [ [0, 1, 2, 2, 3, 0, 4, 2], 2],
  ].forEach( vs => {
    console.log(`  list=[${vs[0]}]`);
    const length = removeElement(vs[0], vs[1]);
    console.log(`  new=[${vs[0].slice(0, length)}], n=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
