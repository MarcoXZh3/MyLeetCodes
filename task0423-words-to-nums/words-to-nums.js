/**
 * @param {string}    s     the scrambled words of numbers
 * @return {string}         the numbers
 */
const originalDigits = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0423 - Reconstruct Original Digits from English:');
  [
    'owoztneoer',
    'fviefuro',
  ].forEach( v => {
    console.log(`  str="${v}", nums="${originalDigits(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
