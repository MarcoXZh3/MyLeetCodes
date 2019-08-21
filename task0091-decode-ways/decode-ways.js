/**
 * @param {string}    s     strings containing the digits
 * @return {number}         how many ways to decode the string
 */
const numDecodings = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0091 - Decode Ways:');
  [
    '12',
    '226',
  ].forEach( v => {
    console.log(`  str="${v}", ways=${numDecodings(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
