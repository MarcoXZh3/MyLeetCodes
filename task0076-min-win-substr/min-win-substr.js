/**
 * @param {string}      s     the source string
 * @param {string}      t     the target string
 * @return {string}           the substring of s that contains all chars of t
 */
const minWindow = function(s, t) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0076 - Minimum Window Substring:');
  [
    ['ADOBECODEBANC', 'ABC'],
  ].forEach( vs => {
    console.log(`  win="${minWindow(vs[0], vs[1])}", s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
