/**
 * @param {string}    s     the original string
 * @param {number}    k     the max operations allowed
 * @return {number}         length of target sub-string
 */
const characterReplacement = function(s, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0424 - Longest Repeating Character Replacement:');
  [
    ['ABAB', 2],
    ['AABABBA', 1],
  ].forEach( vs => {
    console.log(`  target=${characterReplacement(...vs)}, str="${vs[0]}", k=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
