/**
 * @param {number[]} nums   the numbers to be re-ordered
 * @return {void}           do not return anything - modify it in-place instead
 */
const nextPermutation = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0031 - Next Permutation:');
  [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 5],
  ].forEach( vs => {
    const bk = vs.slice();
    nextPermutation(vs);
    console.log(`  num=[${bk.join(', ')}], next=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
