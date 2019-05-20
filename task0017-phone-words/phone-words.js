/**
 * @param {string}    digits    the digits on a phone pad
 * @return {string[]}           the string combinitions
 */
const letterCombinations = function(digits) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0017 - Letter Combinations of a Phone Number:');
  [
    "23",
  ].forEach( str => {
    console.log(`  nums="${str}"`);
    console.log(`  re=[${letterCombinations(str).map(x=>`"${x}"`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
