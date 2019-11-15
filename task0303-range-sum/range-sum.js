/**
 * @param {number[]}    nums    the number array
 */
const NumArray = function(nums) {
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
  console.log('Task 0303 - Range Sum Query - Immutable:');
  const arr = new NumArray([-2, 0, 3, -5, 2, -1]);
  console.log(`  const arr = new NumArray([-2, 0, 3, -5, 2, -1]);`);
  console.log(`  arr.sumRange(0, 2);    // ${arr.sumRange(0, 2)}`);
  console.log(`  arr.sumRange(2, 5);    // ${arr.sumRange(2, 5)}`);
  console.log(`  arr.sumRange(0, 5);    // ${arr.sumRange(0, 5)}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
