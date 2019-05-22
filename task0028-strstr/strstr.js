/**
 * @param {string}    haystack      the string to find from
 * @param {string}    needle        the string to look at
 * @return {number}                 index of the target or -1 if not found
 */
const strStr = function(haystack, needle) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0028 - Implement strStr():');
  [
    ['hello', 'll'],
    ['aaaaa', 'bba'],
    ['a', 'a'],
  ].forEach( vs => {
    console.log(`  haystack="${vs[0]}", needle="${vs[1]}", index=${strStr(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
