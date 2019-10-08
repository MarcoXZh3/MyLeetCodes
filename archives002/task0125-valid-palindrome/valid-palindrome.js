/**
 * @param {string}      s   the string to check
 * @return {boolean}        whether palindrome or not
 */
const isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return s === s.split('').reverse().join('');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0125 - Valid Palindrome:');
  [
    'A man, a plan, a canal: Panama',
    'race a car',
  ].forEach( v => {
    console.log(`  palindrome=${isPalindrome(v)}, str="${v}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
