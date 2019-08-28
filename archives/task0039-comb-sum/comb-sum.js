/**
 * recursively calculate the combined sum, return null or the solutions
 * @param {number[]}      candidates    the current value list
 * @param {number}        target        the target sum
 * @return {number[][]}                 all its possible solutions
 */
const getCombSum = function(candidates, target) {
  // terminate when target becomes 0, or no possible solutions available
  if (target === 0) {
    return [[]];      // target becomes 0: return empty sub-solutions
  } else if (candidates.length === 0 || candidates[0] > target) {
    return null;      // no possible solutions
  }

  // collect the current solutions based on upcoming sub-solutions
  const res = [];
  for (let i = 0; i < candidates.length; i++) {
    // don't consider smaller numbers in case of duplications for next recursion
    const res0 = getCombSum(candidates.slice(i), target - candidates[i]);
    if (!res0) {
      continue ;
    }
    // when sub-solutions available, combine current value as current solutions
    for (let re of res0) {
      re.unshift(candidates[i]);
      res.push(re);
    }
  }
  return res.length === 0 ? null : res;
};


/**
 * @param {number[]}      candidates    the value list
 * @param {number}        target        the target sum
 * @return {number[][]}                 all possible solutions
 */
const combinationSum = function(candidates, target) {
  // the recursion assumes the candidates are sorted
  return getCombSum(candidates.sort( (a,b)=>a-b ), target) || [];
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
    [[2], 1],
    [[3, 12, 9, 11, 6, 7, 8, 5, 4], 15],
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
