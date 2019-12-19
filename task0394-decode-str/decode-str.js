/**
 * @param {string}    s     the encoded string
 * @return {string}         the decoded string
 */
const decodeString = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0394 - Decode String:');
  [
    '3[a]2[bc]',
    '3[a2[c]]',
    '2[abc]3[cd]ef',
  ].forEach( v => {
    console.log(`  code="${v}", str="${decodeString(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
