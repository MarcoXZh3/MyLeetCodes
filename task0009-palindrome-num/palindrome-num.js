/**
 * @param {number}      x     the number to check
 * @return {boolean}          whether the numbe is palindromic or not
 */
const isPalindrome = function(x) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0009 - Palindrome Number:');
  [
    121,
    -121,
    10,
  ].forEach( x => {
    console.log(`  isPanlindrome="${isPalindrome(x)}", x=${x}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
