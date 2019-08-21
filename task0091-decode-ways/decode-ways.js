/**
 * brutal force by recursion
 * @param {string}    s     strings containing the digits
 * @return {number}         how many ways to decode the string
 */
const numDecodings0 = function(s) {
  const min = 1;
  const max = 26;
  /**
   * @param {string}    s     strings containing the digits
   * @return {number}         how many ways to decode the string
   */
  const recursion = (s) => {
    // empty strings have unique solutions
    if (s.length === 0) {
      return 1;
    }

    let total = 0;
    // check the first char
    let v = parseInt(s.charAt(0), 10);
    if (v < min || v > max) {
      return 0;
    }
    total += recursion(s.substring(1));
    // check the first 2 chars if available
    if (s.length > 1) {
      v = parseInt(s.substring(0, 2), 10);
      if (v >= min && v <= max) {
        total += recursion(s.substring(2));
      }
    }
    return total;
  };

  // recursively decode the string
  return recursion(s);
};


/**
 * dynamic programming: ways of string length of n, F(n), equals to:
 * 1) F(n + 1) if 1st char is valid otherwise 0, plus;
 * 2) F(n + 2) if sub-string of 1st 2 chars is valid.
 * @param {string}    s     strings containing the digits
 * @return {number}         how many ways to decode the string
 */
const numDecodings = function(s) {
  const min = 1;
  const max = 26;

  // construct the dp array from end to start
  const dp = Array(s.length + 1).fill(0);
  dp[s.length] = 1;
  let v = parseInt(s.charAt(s.length - 1), 10);
  dp[s.length - 1] = v >= min && v <= max ? 1 : 0;
  for (let i = s.length - 2; i >= 0; i--) {
    v = parseInt(s.charAt(i), 10);
    if (v >= min && v <= max) {
      dp[i] += dp[i + 1];
    }
    v = parseInt(s.substr(i, 2), 10);
    if (v >= 10 && v <= max) {  // '01', '02', ... are considered as invalid
      dp[i] += dp[i + 2];
    }
  }
  return dp[0];
};



/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0091 - Decode Ways:');
  [
    '0',
    '01',
    '12',
    '226',
  ].forEach( v => {
    console.log(`  str="${v}", ways=${numDecodings(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
