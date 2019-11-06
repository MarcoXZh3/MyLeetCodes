/**
 * @param {number[]}    nums      the number array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0283 - Move Zeroes:');
  [
    [0, 1, 0, 3, 12],
  ].forEach( vs => {
    const bk = vs.slice();
    moveZeroes(vs);
    console.log(`  nums=[${bk.join(', ')}], moved=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
