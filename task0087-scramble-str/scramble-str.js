/**
 * recursion: check every possible permutation
 * @param {string}      s1    the 1st string
 * @param {string}      s2    the 2nd string
 * @return {boolean}          whether s2 is scramble of s1
 */
const isScramble = function(s1, s2) {
  // same means matches
  if (s1 === s2) {
    return true;
  }

  // do they have the same letters?
  if (s1.split('').sort( (a,b)=>a>b?1:-1 ).join('') !==
      s2.split('').sort( (a,b)=>a>b?1:-1 ).join('')) {
    return false;
  }

  // compare every combination by splitting the strings at each index
  for (let i = 1; i < s1.length; i++) {
    const l1 = s1.substring(0, i);
    const r1 = s1.substring(i);
    // left of s1 matches left of s2 and right of s1 matches right of s2
    if (isScramble(l1, s2.substring(0, i)) &&
        isScramble(r1, s2.substring(i))) {
      return true;
    }
    // left of s1 matches right of s2 and right of s1 matches left of s2
    if (isScramble(l1, s2.substring(s1.length - i)) &&
        isScramble(r1, s2.substring(0, s1.length - i))) {
      return true;
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0087 - Scramble String:');
  [
    ['great', 'rgeat'],
    ['abcde', 'caebd'],
    ['aa', 'ab'],
    ['abb', 'bab'],
    ['abab', 'aabb'],
    ['abcdefghijklmnopq', 'efghijklmnopqcadb'],
    ['ccbbcaccbccbbbcca', 'ccbbcbbaabcccbccc'],
  ].forEach( vs => {
    console.log(`  scramble=${isScramble(vs[0], vs[1])}, s1="${vs[0]}", s2="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
