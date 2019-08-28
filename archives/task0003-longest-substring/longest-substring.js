/**
 * brutal force: search every combinition with two-level iteration
 * @param {string}    s   the original string
 * @return {number}       length of the longest substring
 */
const lengthOfLongestSubstring1 = (s) => {
  /**
   * check whether a string contains unique letters only
   * @param {string} str  the string to check
   * @returns {boolean}   whether the string is "unique" or not
   */
  const isUnique = function(str) {
    // it is not unqiue if any previous part contains the next char
    for (let i = 1; i < str.length; i++) {
      if (str.substring(0, i).includes(str.charAt(i))) {
        return false;
      }
    }
    return true;
  };

  // empty string always yields 0
  if (s.length === 0) {
    return 0;
  }

  // start matching from the 1st letter
  let max = 1;
  let maxSub = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isUnique(s.substring(i, j)) && max < j - i) {
        max = j - i;
        maxSub = s.substring(i, j);
      }
    }
  }
  console.log(maxSub);
  return max;
};


/**
 * sliding window: locate proper start and end index of the longest substring
 * @param {string}    s   the original string
 * @return {number}       length of the longest substring
 */
const lengthOfLongestSubstring2 = (s) => {
  // empty string always yields 0
  if (s.length === 0) {
    return 0;
  }

  // start matching from the 1st letter
  let left = 0;
  let right = 1;
  let max = right - left;
  // let maxSub = s.substring(left, right);
  while (right < s.length) {
    let substr = s.substring(left, right);
    if (!substr.includes(s.charAt(right))) {  // next not included yet: increase
      right ++;
      if (max < right - left) {               // update max when become bigger
        // maxSub = s.substring(left, right);
        max = right - left;
      }
    } else {                                  // next included: shrink left
      left ++;
      if (left >= right) {                    // when empty, move next again
        right ++;
      }
    }
  }
  // console.log(maxSub);
  return max;
};


/**
 * optimized sliding window: directly skip duplications instead of increasing 1
 * @param {string}    s   the original string
 * @return {number}       length of the longest substring
 */
const lengthOfLongestSubstring = (s) => {
  let ans = 0;
  let chars = {};
  // try to extend the range [i, j]
  for (let j = 0, i = 0; j < s.length; j++) {
    const char = s.charAt(j);
    if (chars[char] >= 0) {
      i = Math.max(chars[char], i);
    }
    ans = Math.max(ans, j - i + 1);
    chars[char] = j + 1;
  }
  return ans;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0003 - Longest Substring Without Repeating Characters:');
  [
    'abcabcbb',
    'bbbbb',
    'pwwkew',
    'au',
    'dvdf',
  ].forEach( (str) => {
    console.log(`  length=${lengthOfLongestSubstring(str)}, str="${str}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
