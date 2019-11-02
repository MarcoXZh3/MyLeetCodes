/**
 * @param {number}    num     the number to read
 * @return {string}           the reading of the number
 */
const numberToWords = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0273 - Integer to English Words:');
  [
    123,
    12345,
    1234567,
    1234567891,
  ].forEach( v => {
    console.log(`  num=${v}, read="${numberToWords(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
