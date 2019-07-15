/**
 * @param {number[]}      nums    the numbers to create the permutations
 * @return {number[][]}           all of the permutations
 */
const permuteUnique = function(nums) {
  return [[]];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0047 - Permutations II:');
  [
    [1, 1, 2],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}], perms=[${permuteUnique(vs).map( p=>`[${p.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
