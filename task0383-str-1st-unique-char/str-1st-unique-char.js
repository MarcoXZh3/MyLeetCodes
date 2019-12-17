/**
 * @param {string}      s     the string
 * @return {number}           index of 1st unique char
 */
const firstUniqChar = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0383 - First Unique Character in a String:');
  [
    'leetcode',
    'loveleetcode',
  ].forEach( v => {
    console.log(`  pos=${firstUniqChar(v)}, str="${v}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
