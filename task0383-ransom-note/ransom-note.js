/**
 * @param {string}    ransomNote    the ransom note string
 * @param {string}    magazine      the magazine string
 * @return {boolean}                whether can construct or not
 */
const canConstruct = function(ransomNote, magazine) {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine.charAt(i);
    map[char] = 1 + (map[char] || 0);
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote.charAt(i);
    if (!(char in map) || -- map[char] < 0) {
      return false;
    }
  }
  return true;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0383 - Ransom Note:');
  [
    ['a', 'b'],
    ['aa', 'ab'],
    ['aa', 'aab'],
  ].forEach( vs => {
    console.log(`  re=${canConstruct(...vs)}, ransom="${vs[0]}", magazine="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
