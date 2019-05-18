/**
 * check as string
 * @param {number}      x     the number to check
 * @return {boolean}          whether the numbe is palindromic or not
 */
const isPalindrome1 = function(x) {
  const str = `${x}`;
  return str === str.split('').reverse().join('');
};


/**
 * reverse half of the number
 * @param {number}      x     the number to check
 * @return {boolean}          whether the numbe is palindromic or not
 */
const isPalindrome2 = function(x) {
  // when 0, 10, 100, 1000, ...
  if (x % 10 === 0) {
    return x === 0;
  }

  // calculate revese and update x
  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // check whther the same, ignoring last digit if length not the same
  return x === rev || x === Math.floor(rev / 10);
};


/**
 * check mathematically
 * @param {number}      x     the number to check
 * @return {boolean}          whether the numbe is palindromic or not
 */
const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  } else if (x === 0) {
    return true;
  }

  let left = Math.pow(10, Math.floor(Math.log10(x)));   // divider for left
  let right = 1;                                        // divider for right
  while (left >= right) {
    if (Math.floor(x / left) % 10 !== Math.floor(x / right) % 10) {
      return false;
    }
    left /= 10;
    right *= 10;
  }
  return true;
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
