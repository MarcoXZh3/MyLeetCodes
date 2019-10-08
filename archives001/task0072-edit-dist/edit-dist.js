/**
 * dynamic programming - if word1.charAt(i - 1) !== word2.charAt(j - 1):
 * 1. replace word1.charAt(i - 1) by word2.charAt(j - 1):
 *    dp[i][j] = dp[i - 1][j - 1] + 1;
 * 2. if word1.substring(0, i - 1) === word2.substring(0, j) then delete
 *    word1.charAt(i - 1): dp[i][j] = dp[i - 1][j] + 1;
 * 3. if word1.substring(0, i) + word2.charAt(j - 1) = word2.substring(0, j)
 *    then insert word2.charAt(j - 1) to word1.substring(0, i):
 *    dp[i][j] = dp[i][j - 1] + 1.
 * @param {string}    word1   the word to convert
 * @param {string}    word2   the word to convert to
 * @return {number}           edit distance: number of operations
 */
const minDistance0 = function(word1, word2) {
  let m = word1.length;
  let n = word2.length;
  const dp = [...Array(m + 1).keys()].map(_=>[...Array(n + 1).keys()].map(_=>0));
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = word1.charAt(i - 1) === word2.charAt(j - 1) ? dp[i - 1][j - 1] :
                 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[m][n];
};


/**
 * dynamic programming optimized with O(2n + 2) space
 * @param {string}    word1   the word to convert
 * @param {string}    word2   the word to convert to
 * @return {number}           edit distance: number of operations
 */
const minDistance1 = function(word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let pre = [...Array(n + 1).keys()].map( (_,i)=>i );
  let cur = [...Array(n + 1).keys()].map(_=>0);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) {
      cur[j] = word1.charAt(i - 1) === word2.charAt(j - 1) ? pre[j - 1] :
               1 + Math.min(pre[j - 1], cur[j - 1], pre[j]);
    }
    pre = cur;
    cur = cur.map( _=>0 );
  }
  return pre[n];
};


/**
 * dynamic programming optimized with O(n + 1) space
 * @param {string}    word1   the word to convert
 * @param {string}    word2   the word to convert to
 * @return {number}           edit distance: number of operations
 */
const minDistance = function(word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let pre;
  let cur = [...Array(n + 1).keys()].map( (_,i)=>i );
  for (let i = 1; i <= m; i++) {
    pre = cur[0];
    cur[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = cur[j];
      cur[j] = word1.charAt(i - 1) === word2.charAt(j - 1) ? pre :
               1 + Math.min(pre, cur[j - 1], cur[j]);
      pre = tmp;
    }
  }
  return cur[n];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0072 - Edit Distance:');
  [
    ['horse', 'ros'],
    ['intention', 'execution'],
    ['', ''],
  ].forEach( vs => {
    console.log(`  dist=${minDistance(vs[0], vs[1])}, word1="${vs[0]}", word2="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
