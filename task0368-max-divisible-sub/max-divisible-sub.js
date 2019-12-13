/**
 * @param {number[]}      nums      the number list
 * @return {number[]}               a max sub set
 */
const largestDivisibleSubset = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0368 - Largest Divisible Subset:');
  [
    [1, 2, 3],
    [1, 2, 4, 8],
  ].forEach( vs => {
    console.log(`  sub=${JSON.stringify(largestDivisibleSubset(vs))}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
