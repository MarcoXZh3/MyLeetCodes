/**
 * @param {string}    s     the original string with duplicated letters
 * @return {string}         the string with duplicated letters removed
 */
const removeDuplicateLetters = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0316 - Remove Duplicate Letters:');
  [
    'bcabc',
    'cbacdcbc',
  ].forEach( v => {
    console.log(`  str="${removeDuplicateLetters(v)}"; raw="${v}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
