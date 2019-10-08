/**
 * sliding window
 * @param {string}      s     the source string
 * @param {string}      t     the target string
 * @return {string}           the substring of s that contains all chars of t
 */
const minWindow = function(s, t) {
  if (s.length === 0 || t.length === 0) {
    return '';
  }

  const re = { length:-1, left:0, right:0 };
  let left = 0;
  let right = 0;
  const index1 = {};  // index of chars in t
  const index2 = {};  // index of chars in cur substring of s
  let charCnt = 0;    // how many distinct chars of t fully covered in substring

  // index t
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    index1[char] = (index1[char] || 0) + 1;
  }

  // sliding the windows while check chars in s
  while (right < s.length) {
    const char = s.charAt(right);
    index2[char] = (index2[char] || 0) + 1;   // index the current char

    // increase the char count if all of such char in t has met
    if (index1[char] === index2[char]) {
      charCnt ++;
    }

    // when a target substring is found, try shrink it from the left
    while (left <= right && charCnt === Object.keys(index1).length) {
      // if the target substring is a candidate, save it
      if (re.length === -1 || right - left + 1 < re.length) {
        re.length = right - left + 1;
        re.left = left;
        re.right = right;
      }

      // shrink the substring by remove the left char
      const char = s.charAt(left++);
      index2[char] --;
      // if the char is in t, deduct the char count
      if (index2[char] < index1[char]) {
        charCnt --;
      }
    }
    right ++;
  }
  return re.length === -1 ? '' : s.substring(re.left, re.right + 1);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0076 - Minimum Window Substring:');
  [
    ['ADOBECODEBANC', 'ABC'],
  ].forEach( vs => {
    console.log(`  win="${minWindow(vs[0], vs[1])}", s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
