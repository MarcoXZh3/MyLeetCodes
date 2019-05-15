/**
 * check if the given string is palindrome
 * @param {string}  str   the string to check
 * @returns {boolean}     whether it's palindrome or not
 */
const isPalindrome = function(str) {
  for (let i = 0; i < (str.length + 1 ) / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
};


/**
 * brutal force 1: loop all possible combinitions with two-level iteration
 * @param {string}    s     the entire string
 * @return {string}         the longest palindrome
 */
const longestPalindrome1 = function(s) {
  // loop every combinition, taking previous results into consideration
  let str = s.substr(0, 1);
  for (let i = 0; i + str.length < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (j - i > str.length && isPalindrome(s.substring(i, j))) {
        str = s.substring(i, j);
      }
    }
  }
  return str;
};


/**
 * brutal force 2: check longest fisrt, then shrink 1 letter every time
 * @param {string}    s     the entire string
 * @return {string}         the longest palindrome
 */
const longestPalindrome2 = function(s) {
  let max = s.length;
  while (max > 0) {
    for (let left = 0; left + max <= s.length; left ++) {
      const substr = s.substr(left, max);
      if (isPalindrome(substr)) {
        return substr;
      }
    }
    max --;
  }
  return "";
};


/**
 * dynamic programming - expanding from center: if the 2 letters before and
 * after a palindrome are the same, then the 3 become a bigger palindrome
 * @param {string}    s     the entire string
 * @return {string}         the longest palindrome
 */
const longestPalindrome = function(s) {
  /**
   * get the max palindrome around the given center
   * @param {string}    str     the string to be checked
   * @param {integer}   left    left index of the center
   * @param {integer}   right   right index of the center
   * @returns {string}          the max palindrome
   */
  const maxAroundCenter = function(str, left, right) {
    let half = 0;
    // expand the size when still palindrome (and available of course)
    while (left - half >= 0 && right + half < s.length &&
           str.charAt(left - half) === str.charAt(right + half)) {
      half ++;
    }
    // if was expanded, the previous one was the right answer
    if (half > 0) {
      half --;
    }
    return str.substring(left - half, right + half + 1);
  }

  // check every possible center
  let maxSub = "";
  for (let center = 0; center < s.length; center ++) {
    // case 1: the letter at center itself is the center
    let str = maxAroundCenter(s, center, center);
    if (maxSub.length < str.length) {
      maxSub = str;
    }

    // case 2: the letter and its previous letter are the center
    // such case was checked during the previous iteration of center

    // case 3: the letter and its next letter (if available) are the center
    if (center + 1 >= s.length || s.charAt(center) !== s.charAt(center + 1)) {
      continue;
    }
    str = maxAroundCenter(s, center, center + 1);
    if (maxSub.length < str.length) {
      maxSub = str;
    }
  }
  return maxSub;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0005 - Longest Palindromic Substring:');
  [
    "babad",
    "cbbd",
    "bb",
  ].forEach( (str) => {
    console.log(`  str="${str}"; sub="${longestPalindrome(str)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
