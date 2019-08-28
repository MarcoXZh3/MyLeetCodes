/**
 * brutal force by recursion: check all possible common sub strings
 * @param {string}    s1    the 1st string
 * @param {string}    s2    the 2nd string
 * @param {string}    s3    the 3rd string
 * @return {boolean}        whether s3 matches the interleaving of s1 and s2
 */
const isInterleave0 = function(s1, s2, s3) {
  /**
   * @param {string}    s1    the 1st string
   * @param {string}    s2    the 2nd string
   * @param {string}    s3    the 3rd string
   * @return {boolean}        whether s3 matches s1 interleaving s2
   */
  const recursion = (s1, s2, s3) => {
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
      // all chars checked and matched
      return true;
    } else if (s1.length + s2.length !== s3.length) {
      // some mismatched chars remained
      return false;
    }
    // find out the max common sub string between s1 and s3
    let pos = 0;
    while (pos < s1.length && pos < s3.length && s1.charAt(pos) === s3.charAt(pos)) {
      pos ++;
    }
    // check every possible length of common sub string
    while (pos > 0) {
      // remove the common sub string, switch s1 and s2, and keep checking
      if (recursion(s2, s1.substring(pos), s3.substring(pos))) {
        return true;
      }
      // try a smaller common sub string
      pos --;
    }
    // all checked but not matching
    return false;
  };

  // interleaving starts with either s1 or s2;
  return recursion(`${s1}`, `${s2}`, `${s3}`) || recursion(`${s2}`, `${s1}`, `${s3}`);
};


/**
 * recursion with momerization
 * @param {string}    s1    the 1st string
 * @param {string}    s2    the 2nd string
 * @param {string}    s3    the 3rd string
 * @return {boolean}        whether s3 matches the interleaving of s1 and s2
 */
const isInterleave1 = function(s1, s2, s3) {
  const recursion = (s1, i, s2, j, s3, k, memo) => {
    if (i === s1.length) {
      return s2.substring(j) === s3.substring(k);
    }
    if (j === s2.length) {
      return s1.substring(i) === s3.substring(k);
    }
    if (memo[i][j] >= 0) {
      return memo[i][j] === 1;
    }
    let re = false;
    if (s3.charAt(k) === s1.charAt(i) && recursion(s1, i+1, s2, j, s3, k+1, memo) ||
        s3.charAt(k) === s2.charAt(j) && recursion(s1, i, s2, j+1, s3, k+1, memo)) {
      re = true;
    }
    memo[i][j] = re ? 1 : 0;
    return re;
  };

  const memo = [...Array(s1.length).keys()].map(_=>[...Array(s2.length).keys()].map(_=>-1));
  return recursion(s1, 0, s2, 0, s3, 0, memo);
};


/**
 * dynamic programming
 * @param {string}    s1    the 1st string
 * @param {string}    s2    the 2nd string
 * @param {string}    s3    the 3rd string
 * @return {boolean}        whether s3 matches the interleaving of s1 and s2
 */
const isInterleave2 = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  const dp = [...Array(s1.length+1).keys()].map(_=>[...Array(s2.length+1).keys()].map(_=>false));
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1);
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
      } else {
        dp[i][j] = dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1) ||
                   dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
      }
    }
  }
  return dp[s1.length][s2.length];
};


/**
 * dynamic programming 1D optimized
 * @param {string}    s1    the 1st string
 * @param {string}    s2    the 2nd string
 * @param {string}    s3    the 3rd string
 * @return {boolean}        whether s3 matches the interleaving of s1 and s2
 */
const isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  const dp = [...Array(s2.length+1).keys()].map(_=>false);
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[j] = true;
      } else if (i === 0) {
        dp[j] = dp[j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1);
      } else if (j === 0) {
        dp[j] = dp[j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
      } else {
        dp[j] = dp[j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1) ||
                dp[j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
      }
    }
  }
  return dp[s2.length];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0097 - Interleaving String:');
  [
    ['aabcc', 'dbbca', 'aadbbcbcac'],
    ['aabcc', 'dbbca', 'aadbbbaccc'],
  ].forEach( vs => {
    console.log(`  interleaving=${isInterleave(vs[0], vs[1], vs[2])}; s1="${vs[0]}", s2="${vs[1]}", s3="${vs[2]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
