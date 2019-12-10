/**
 * @param {character[]}     s     the char list of the string
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0344 - Reverse String:');
  [
    ['h', 'e', 'l', 'l', 'o'],
    ['H', 'a', 'n', 'n', 'a', 'h'],
  ].forEach( vs => {
    const bk = vs.slice();
    reverseString(vs);
    console.log(`  str="${bk.join('')}", rev="${vs.join('')}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
