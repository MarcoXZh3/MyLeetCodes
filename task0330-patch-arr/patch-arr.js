/**
 * @param {number[]}    nums      the number array
 * @param {number}      n         the range number
 * @return {number}               minimum number of patches
 */
const minPatches = function(nums, n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0330 - Patching Array:');
  [
    [6, [1, 3]],
    [20, [1, 5, 10]],
    [5, [1, 2, 2]],
  ].forEach( vs => {
    console.log(`  min=${minPatches(vs[1], vs[0])}, n=${vs[0]}, nums=${JSON.stringify(vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
