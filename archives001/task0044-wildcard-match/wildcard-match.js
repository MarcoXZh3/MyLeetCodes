/**
 * @param {string}    str     the string to compare
 * @param {string}    ptn     the pattern to follow
 * @return {boolean}          whether the string matches the pattern or not
 */
const isMatch = function(str, ptn) {
  let s = 0, p = 0, match = 0, starIdx = -1;
  while (s < str.length) {
    if (p < ptn.length && (ptn.charAt(p) == '?' || str.charAt(s) == ptn.charAt(p))) {
      // advancing both pointers if not "*"
      s ++;
      p ++;
    }
    else if (p < ptn.length && ptn.charAt(p) == '*') {
      // "*"" found, only advancing pattern pointer
      starIdx = p;
      match = s;
      p ++;
    }
    // last pattern pointer was "*", advancing string pointer
    else if (starIdx != -1) {
        p = starIdx + 1;
        match ++;
        s = match;
    }
    // current and previous patterns were not "*", and chars not match
    else {
      return false;
    }
  }

  // check for remaining characters in pattern
  while (p < ptn.length && ptn.charAt(p) == '*') {
    p ++;
  }

  return p == ptn.length;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0044 - Wildcard Matching:');
  [
    ['aa', 'a'],
    ['aa', '*'],
    ['cb', '?a'],
    ['adceb', '*a*b'],
    ['acdcb', 'a*c?b'],
  ].forEach( vs => {
    console.log(`  match=${isMatch(vs[0], vs[1])}, s="${vs[0]}"; p="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
