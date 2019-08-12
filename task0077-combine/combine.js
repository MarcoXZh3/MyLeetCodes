/**
 * @param {number}        n       how many numbers we have
 * @param {number}        k       how many numbers to grab
 * @return {number[][]}           all the combinations of the k of n numbers
 */
const combine = function(n, k) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0077 - Combinations:');
  [
    [4, 2],
  ].forEach( vs => {
    const nums = combine(vs[0], vs[1]);
    console.log(`  n=${vs[0]}, k=${vs[1]}; c(n,k)=${nums.length}`);
    for (let i = 0; i < nums.length; i++) {
      console.log(`  ${i+1}/${nums.length}: [${nums[i].join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
