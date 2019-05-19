/**
 * @param {number}    num     the interger
 * @return {string}           the roman number
 */
const intToRoman = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0012 - Integer to Roman:');
  [
    3,
    4,
    9,
    58,
    1994,
  ].forEach( n => {
    console.log(`  n=${n}, roman=${intToRoman(n)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
