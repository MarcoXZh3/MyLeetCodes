/**
 * @param {string}    s     the string
 * @param {number}    k     number of repetition
 * @return {number}         the max sub string
 */
const longestSubstring = function(s, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0395 - Longest Substring with At Least K Repeating Characters:');
  [
    ['aaabb', 3],
    ['ababbc', 2],
  ].forEach( vs => {
    console.log(`  max=${longestSubstring(...vs)}, k=${vs[1]}, str="${vs[0]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
