/**
 * @param {string}    s   the entire string
 * @return {string}       the reversed string
 */
const reverseWords = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0151 - Reverse Words in a String:');
  [
    'the sky is blue',
    '  hello world!  ',
    'a good   example',
  ].forEach( v => {
    console.log(`  str="${v}", rev="${reverseWords(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
