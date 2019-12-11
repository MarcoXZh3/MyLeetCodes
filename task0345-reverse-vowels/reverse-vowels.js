/**
 * @param {string}      s     the string to reverse
 * @return {string}           the reversed string
 */
const reverseVowels = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0345 - Reverse Vowels of a String:');
  [
    'hello',
    'leetcode',
  ].forEach( v => {
    console.log(`  str="${v}", rev="${reverseVowels(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
