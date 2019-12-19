/**
 * @param {string}      s     the short string
 * @param {string}      t     the long string
 * @return {boolean}          whether a sub sequence or not
 */
const isSubsequence = function(s, t) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0392 - Is Subsequence:');
  [
    ['abc', 'ahbgdc'],
    ['axc', 'ahbgdc'],
  ].forEach( vs => {
    console.log(`  sub=${isSubsequence(...vs)}, s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
