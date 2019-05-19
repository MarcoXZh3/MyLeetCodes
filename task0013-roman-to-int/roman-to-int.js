/**
 * @param {string}    s     the roman number
 * @return {number}         the integer
 */
const romanToInt = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0013 - Roman to Integer:');
  [
    'III',
    'IV',
    'IX',
    'LVIII',
    'MCMXCIV',
  ].forEach( str => {
    console.log(`  n=${romanToInt(str)}, roman=${str}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
