/**
 * check whether the string is palindrome or not
 * @param {string}    s     string to check
 * @returns {boolean}       whether is palindrome or not
 */
const isPalindrome = function(s) {
  for (let i = 0; i < s.length - 1 - i; i++) {
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
      return false;
    }
  }
  return true;
};


/**
 * @param {string}    s   the string to cut to palindromes
 * @return {number}       minimum times of cutting
 */
const minCut = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0132 - Palindrome Partitioning II:');
  [
    'aab',
  ].forEach( v => {
    console.log(`  str="${v}"; minCut=${minCut(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
