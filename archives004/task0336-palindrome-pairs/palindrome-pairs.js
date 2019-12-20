/**
 * check if the given string is palindrome or not
 * @param {string[]}      words     the string to check
 * @return {number[][]}             whether palindrome or not
 */
const palindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
};


/**
 * @param {string[]}      words     the word list
 * @return {number[][]}             indexes of the palindrome pairs
 */
const palindromePairs0 = function(words) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue ;
      }
      if (palindrome(words[i] + words[j])) {
        res.push([i, j]);
      }
    }
  }
  return res;
};


/**
 * @param {string[]}      words     the word list
 * @return {number[][]}             indexes of the palindrome pairs
 */
const palindromePairs = function(words) {
  const res = [];
  const map = {};
  for (let i = 0; i < words.length; i++) {
    map[words[i]] = i;
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j <= words[i].length; j++) {
      const str1 = words[i].substring(0, j);
      const str2 = words[i].substring(j);
      if (palindrome(str1)) {
        const rev = str2.split('').reverse().join('');
        if ((rev in map) && map[rev] !== i) {
          res.push([map[rev], i]);
        }
      }
      if (palindrome(str2)) {
        const rev = str1.split('').reverse().join('');
        if ((rev in map) && map[rev] !== i && str2.length > 0) {
          res.push([i, map[rev]]);
        }
      }
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0336 - Palindrome Pairs:');
  [
    ['abcd', 'dcba', 'lls', 's', 'sssll'],
    ['bat', 'tab', 'cat'],
  ].forEach( vs => {
    console.log(`  words=${JSON.stringify(vs)}`);
    console.log(`  palindromes=${JSON.stringify(palindromePairs(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
