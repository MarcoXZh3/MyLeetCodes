/**
 * @param {number[]}      nums    numbers to grab for the subsets
 * @return {number[][]}           all subsets
 */
const subsets = function(nums) {
  return [nums];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0078 - Subsets:');
  [
    [1, 2, 3],
  ].forEach( vs => {
    const res = subsets(vs);
    console.log(`  nums=[${vs.join(', ')}], subsets=${res.length}`);
    for (let i = 0; i < res.length; i++) {
      console.log(`  ${i+1}/${res.length}: [${res[i].join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
