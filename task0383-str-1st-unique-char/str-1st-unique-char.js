/**
 * @param {string}      s     the string
 * @return {number}           index of 1st unique char
 */
const firstUniqChar = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    map[char] = map[char] || [];
    map[char].push(i);
  }
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (map[char] && map[char].length === 1) {
      return map[char][0];
    }
  }
  return -1;
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
