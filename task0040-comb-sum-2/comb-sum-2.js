/**
 * @param {number[]}      candidates    the value list
 * @param {number}        target        the target sum
 * @return {number[][]}                 all possible solutions
 */
const combinationSum2 = function(candidates, target) {
  return [[]];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0040 - Combination Sum II:');
  [
    [[10, 1, 2, 7, 6, 1, 5], 8],
    [[2, 5, 2, 1, 2], 5],
  ].forEach( vs => {
    const ans = combinationSum2(vs[0], vs[1]);
    console.log(`  target=${vs[1]}; nums=[${vs[0].join(',')}]`);
    console.log(`  ans=[${ans.map( an=>`[${an.join(',')}]` ).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
