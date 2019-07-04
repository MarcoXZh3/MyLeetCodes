/**
 * recursively calculate the combined sum, return null or the solutions
 * same with previous question except skipping duplicated candidates
 * @param {number[]}      candidates    the current value list
 * @param {number}        target        the target sum
 * @return {number[][]}                 all its possible solutions
 */
const getCombSum2 = function(candidates, target) {
  // terminate when target becomes 0, or no possible solutions available
  if (target === 0) {
    return [[]];      // target becomes 0: return empty sub-solutions
  } else if (candidates.length === 0 || candidates[0] > target) {
    return null;      // no possible solutions
  }

  // collect the current solutions based on upcoming sub-solutions
  const res = [];
  for (let i = 0; i < candidates.length; i++) {
    // skip duplicated candidates
    if (i > 0 && candidates[i - 1] === candidates[i]) {
      continue ;
    }
    // don't consider itself and smaller numbers for next recursion
    const res0 = getCombSum2(candidates.slice(i+1), target - candidates[i]);
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
const combinationSum2 = function(candidates, target) {
  // the recursion assumes the candidates are sorted
  return getCombSum2(candidates.sort( (a,b)=>a-b ), target) || [];
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
