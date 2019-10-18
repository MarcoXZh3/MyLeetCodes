/**
 * @param {string}      s       the original string
 * @return {string}             the palindrome
 */
const shortestPalindrome = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0214 - Shortest Palindrome:');
  [
    'aacecaaa',
    'abcd',
  ].forEach( v => {
    console.log(`  s="${v}", palindrome="${shortestPalindrome(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
