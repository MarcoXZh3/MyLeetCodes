/**
 * @param {number[]}    nums    the number array to rotate
 * @param {number}      k       how many times to rotate
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0189 - Rotate Array:');
  [
    [3, [1, 2, 3, 4, 5, 6, 7]],
    [2, [-1,-100,3,99]],
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
    rotate(vs[1], vs[0]);
    console.log(`  rotated=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
