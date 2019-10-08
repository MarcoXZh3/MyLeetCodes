/**
 * dynamic programming: O((m + 1) * (n + 1))
 * @param {string}    s   the larger string
 * @param {string}    t   the smaller string
 * @return {number}       how many subsequences available
 */
const numDistinct0 = function(s, t) {
  const dp = [...Array(t.length+1).keys()].map((_,i)=>[...Array(s.length+1).keys()].map(_=>i===0?1:0));
  for(let i = 0; i < t.length; i++) {
    for(let j = 0; j < s.length; j++) {
      dp[i + 1][j + 1] = t.charAt(i) === s.charAt(j) ? dp[i][j] + dp[i + 1][j] :
                                                       dp[i + 1][j];
    }
  }
  return dp[t.length][s.length];
};


/**
 * dynamic programming: O(n + 1)
 * @param {string}    s   the larger string
 * @param {string}    t   the smaller string
 * @return {number}       how many subsequences available
 */
const numDistinct = function(s, t) {
  const dp = Array(t.length + 1).fill(0);
  dp[0] = 1;
  for (let j = 1; j <= s.length; j++) { 
    let prev = 1;
    for (let i = 1; i <= t.length; i++) {
      const temp = dp[i];
      dp[i] += t.charAt(i - 1) === s.charAt(j - 1) ? prev : 0;
      prev = temp;
    }
  }
  return dp[t.length];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0115 - Distinct Subsequences:');
  [
    ['rabbbit', 'rabbit'],
    ['babgbag', 'bag'],
    [
      'adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeea' +
      'eeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc',
      'bcddceeeebecbc',
    ],
  ].forEach( vs => {
    console.log(`  cnt=${numDistinct(vs[0], vs[1])}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
