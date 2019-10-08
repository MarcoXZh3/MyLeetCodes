/**
 * @param {string}    s     the string to search
 * @return {number}         length of the last word
 */
const lengthOfLastWord = function(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === ' ') {
      if (length === 0) {
        continue ;
      } else {
        break ;
      }
    }
    length ++;
  }
  return length;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0058 - Length of Last Word:');
  [
    'Hello World',
    'a',
    'a ',
  ].forEach( str => {
    console.log(` length=${lengthOfLastWord(str)}, str="${str}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
