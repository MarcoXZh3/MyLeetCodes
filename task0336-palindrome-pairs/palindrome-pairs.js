/**
 * @param {string[]}      words     the word list
 * @return {number[][]}             indexes of the palindrome pairs
 */
const palindromePairs = function(words) {

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
