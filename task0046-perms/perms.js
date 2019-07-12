/**
 * @param {number[]}      nums    the numbers to create the permutations
 * @return {number[][]}           all of the permutations
 */
const permute = function(nums) {
  return [[]];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0046 - Permutations:');
  [
    [1, 2, 3],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}], perms=[${permute(vs).map( p=>`[${p.join(',')}]`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
