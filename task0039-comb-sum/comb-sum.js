/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0039 - Combination Sum:');
  [
    [[2, 3, 6, 7], 7],
    [[2, 3, 5], 8],
  ].forEach( vs => {
    const ans = combinationSum(vs[0], vs[1]);
    console.log(`  target=${vs[1]}; nums=[${vs[0].join(',')}]`);
    console.log(`  ans=[${ans.map( an=>`[${an.join(',')}]` ).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
