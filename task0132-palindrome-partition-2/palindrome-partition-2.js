/**
 * dynamic programming:
 * 1. cut[i] is the minimum of cut[j - 1] + 1 (j <= i), if [j, i] is palindrome.
 * 2. If [j, i] is palindrome, [j + 1, i - 1] is palindrome, and c[j] == c[i].
 * @param {string}    s   the string to cut to palindromes
 * @return {number}       minimum times of cutting
 */
const minCut = function(s) {
  const dp = [...Array(s.length).keys()].map(_=>[...Array(s.length).keys()].map(_=>false));
  const cut = Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    let min = i;
    for (let j = 0; j <= i; j++) {
      if (s.charAt(i) === s.charAt(j) && (j + 1 > i - 1 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, cut[j - 1] + 1);
      }
    }
    cut[i] = min;
  }
  return cut[s.length - 1];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0132 - Palindrome Partitioning II:');
  [
    'aab',
  ].forEach( v => {
    console.log(`  str="${v}"; minCut=${minCut(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
