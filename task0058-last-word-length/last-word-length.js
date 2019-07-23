/**
 * @param {string}    s     the string to search
 * @return {number}         length of the last word
 */
const lengthOfLastWord = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0058 - Length of Last Word:');
  [
    'Hello World',
  ].forEach( str => {
    console.log(` length=${lengthOfLastWord(str)}, str="${str}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
