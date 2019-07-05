/**
 * @param {string}    s       the string to compare
 * @param {string}    p       the pattern to follow
 * @return {boolean}          whether the string matches the pattern or not
 */
const isMatch = function(s, p) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0044 - Wildcard Matching:');
  [
    ['aa', 'a'],
    ['aa', '*'],
    ['cb', '?a'],
    ['adceb', '*a*b'],
    ['acdcb', 'a*c?b'],
  ].forEach( vs => {
    console.log(`  match=${isMatch(vs[0], vs[1])}, s="${vs[0]}"; p="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
