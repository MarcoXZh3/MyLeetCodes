/**
 * @param {number[]}    nums      the number array
 * @param {number}      target    the target sum
 * @return {number}               how many combinations
 */
const combinationSum4 = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0377 - Combination Sum IV:');
  [
    [ [1, 2, 3], 4],
  ].forEach( vs => {
    console.log(`  re=${combinationSum4(...vs)}, nums=${JSON.stringify(vs[0])}, target=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
