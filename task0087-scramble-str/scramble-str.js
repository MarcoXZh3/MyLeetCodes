/**
 * @param {string}      s1    the 1st string
 * @param {string}      s2    the 2nd string
 * @return {boolean}          whether s2 is scramble of s1
 */
const isScramble = function(s1, s2) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0087 - Scramble String:');
  [
    ['great', 'rgeat'],
    ['abcde', 'caebd'],
  ].forEach( vs => {
    console.log(`  scramble=${isScramble(vs[0], vs[1])}, s1="${vs[0]}", s2="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
