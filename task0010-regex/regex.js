/**
 * @param {string}      s     the string for matching
 * @param {string}      p     the pattern to match
 * @return {boolean}          whether match or not
 */
const isMatch = function(s, p) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0010 - Regular Expression Matching:');
  [
    ['ab', '.*'],
    ['aab', 'c*a*b'],
    ['mississippi', 'mis*is*p*.'],
  ].forEach( vs => {
    console.log(`  isMatch=${isMatch(vs[0], vs[1])}, s="${vs[0]}", p="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
