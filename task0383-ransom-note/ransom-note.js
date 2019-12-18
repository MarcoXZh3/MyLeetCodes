/**
 * @param {string}    ransomNote    the ransom note string
 * @param {string}    magazine      the magazine string
 * @return {boolean}                whether can construct or not
 */
const canConstruct = function(ransomNote, magazine) {

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
