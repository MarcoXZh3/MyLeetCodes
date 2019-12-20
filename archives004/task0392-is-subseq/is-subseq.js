/**
 * @param {string}      s     the short string
 * @param {string}      t     the long string
 * @return {boolean}          whether a sub sequence or not
 */
const isSubsequence = function(s, t) {
  if (s.length === 0) {
    return true;
  }
  let idx1 = 0;
  let idx2 = 0;
  while (idx2 < t.length) {
    if (t.charAt(idx2) === s.charAt(idx1)) {
      idx1 ++;
      if (idx1 === s.length) {
        return true;
      }
    }
    idx2 ++;
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0392 - Is Subsequence:');
  [
    ['abc', 'ahbgdc'],
    ['axc', 'ahbgdc'],
  ].forEach( vs => {
    console.log(`  sub=${isSubsequence(...vs)}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
