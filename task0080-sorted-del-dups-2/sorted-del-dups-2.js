/**
 * @param {number[]}  nums    the original number array
 * @return {number}           the length of the array without duplications
 */
const removeDuplicates = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0080 - Remove Duplicates from Sorted Array II:');
  [
    [1, 1, 1, 2, 2, 3],
    [0, 0, 1, 1, 1, 1, 2, 3, 3],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    const length = removeDuplicates(vs);
    console.log(`  nums=[${bk.join(', ')}]; removed=(${length})[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
