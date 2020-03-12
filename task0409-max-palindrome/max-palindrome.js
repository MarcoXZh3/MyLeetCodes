/**
 * @param {string}    s     the char list string
 * @return {number}         length of the max palindrome
 */
const longestPalindrome = function(s) {
  let res = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (set.has(char)) {
      res ++;
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  return res * 2 + (set.size > 0 ? 1 : 0);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0409 - Longest Palindrome:');
  [
    'abccccdd',
  ].forEach( v => {
    console.log(`  str="${v}", max=${longestPalindrome(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
