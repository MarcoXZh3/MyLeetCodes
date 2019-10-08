/**
 * recursion
 * @param {string}      s     the string for matching
 * @param {string}      p     the pattern to match
 * @return {boolean}          whether match or not
 */
const isMatch = function(s, p) {
  if (p === '') {
    return s === '';
  }

  // whether the first char matches the pattern
  const match0 = s!=='' && (p.charAt(0) === '.' || p.charAt(0) === s.charAt(0));
  if (p.length > 1 && p.charAt(1) === '*') {
    // if "*" arrived, make sure either:
    //   1) text matches rest pattern ("*" has 0 case), or
    //   2) first char and rest string mathes entire pattern ("*" has 1+ cases)
    return isMatch(s, p.substr(2)) || match0 && isMatch(s.substr(1), p);
  } else {
    // other symbol arrived, make sure both:
    //  1) first char matches (first part of the pattern), and
    //  2) rest string matches rest part of the pattern
    return match0 && isMatch(s.substr(1), p.substr(1));
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0010 - Regular Expression Matching:');
  [
    ['aa', 'a'],
    ['aa', 'a*'],
    ['aa', '.*'],
    ['aab', 'c*a*b'],
    ['mississippi', 'mis*is*p*.'],
    ['aaa', 'a*a'],
    ['mississippi', 'mis*is*ip*.'],
    ['ab', '.*c'],
  ].forEach( vs => {
    console.log(`  isMatch=${isMatch(vs[0], vs[1])}, s="${vs[0]}", p="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
