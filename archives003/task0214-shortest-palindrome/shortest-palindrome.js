/**
 * find max sub palindrome, then prepend reverse of the remaining
 * @param {string}      s       the original string
 * @return {string}             the palindrome
 */
const shortestPalindrome0 = function(s) {
  const palindrome = (chars, end) => {
    for (let i = 0; i <= end; i++) {
      if (chars[i] !== chars[end - i]) {
        return false;
      }
    }
    return true;
  }

  // find the max sub palindrome
  const chars = s.split('');
  let end = chars.length - 1;
  while (!palindrome(chars, end)) {
    end --;
  }
  // reverse the remaining and prepend it back to the string
  return chars.slice(end + 1).reverse().concat(chars).join('');
};


/**
 * KMP Algorithm
 * @see https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm
 * @param {string}      s       the original string
 * @return {string}             the palindrome
 */
const shortestPalindrome = function(s) {
  const SEPARATOR = '#';
  const chars = s.split('');
  const rev = chars.slice().reverse();
  const join = chars.concat(SEPARATOR, ...rev);
  const pos = Array(join.length).fill(0);
  for (let i = 1; i < pos.length; i++) {
    let prev = pos[i - 1];
    while (prev > 0 && join[i] !== join[prev]) {
      prev = pos[prev - 1];
    }
    if (join[i] === join[prev]) {
      prev ++;
    }
    pos[i] = prev;
  }
  return rev.slice(0, rev.length - pos[join.length - 1]).join('') + s;
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
