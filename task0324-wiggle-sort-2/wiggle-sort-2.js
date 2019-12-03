/**
 * @param {number[]}    nums    the number array
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0324 - Wiggle Sort II:');
  [
    [1, 5, 1, 1, 6, 4],
    [1, 3, 2, 2, 3, 1],
  ].forEach( vs => {
    bk = vs.slice();
    wiggleSort(vs);
    console.log(`  nums=${JSON.stringify(bk)}, wiggle=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
