/**
 * @param {number[]}    nums    the number array
 */
const NumArray = function(nums) {
  /**
   * @param {number}    i     the starting index for the sum, inclusive
   * @param {number}    val   the update to be updated to
   * @return {void}
   */
  this.update = (i, val) => {
  };
  /**
   * @param {number}    i     the starting index for the sum, inclusive
   * @param {number}    j     the ending index for the sum, inclusive
   * @return {number}         the summation
   */
  this.sumRange = (i, j) => {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0307 - Range Sum Query - Mutable:');
  const arr = new NumArray([1, 3, 5]);
  console.log(`  const arr = new NumArray([1, 3, 5]);`);
  console.log(`  arr.sumRange(0, 2);    // ${arr.sumRange(0, 2)}`);
  arr.update(1, 2);
  console.log(`  arr.update(1, 2);`);
  console.log(`  arr.sumRange(0, 2);    // ${arr.sumRange(0, 2)}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
