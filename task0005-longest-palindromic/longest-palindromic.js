/**
 * @param {string}    s     the entire string
 * @return {string}         the longest palindrome
 */
const longestPalindrome = function(s) {

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
  ].forEach( (str) => {
    console.log(`  str="${str}"; sub="${longestPalindrome(str)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
