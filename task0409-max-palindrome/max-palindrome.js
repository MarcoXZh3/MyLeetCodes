/**
 * @param {string}    s     the char list string
 * @return {number}         length of the max palindrome
 */
const longestPalindrome = function(s) {

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
