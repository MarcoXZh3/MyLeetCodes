/**
 * @param {number[]}      nums      the number array
 * @return {number[][]}             all the sub-sets
 */
const subsetsWithDup = function(nums) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0090 - Subsets II:');
  [
    [1, 2, 2],
  ].forEach( vs => {
    const res = subsetsWithDup(vs);
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
