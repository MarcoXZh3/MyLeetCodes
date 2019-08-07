/**
 * @param {number[]}    nums    the number list representing colors
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0075 - Sort Colors:');
  [
    [2, 0, 2, 1, 1, 0],
  ].forEach( vs => {
    console.log(`  raw=[${vs.join(', ')}]`);
    sortColors(vs);
    console.log(`  raw=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
