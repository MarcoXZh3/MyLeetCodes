/**
 * @param {string}    s     the roman number
 * @return {number}         the integer
 */
const romanToInt = function(s) {
  const values = {
    'I':  1,
    'V':  5,
    'X':  10,
    'L':  50,
    'C':  100,
    'D':  500,
    'M':  1000,
  };

  let num = 0;
  while (s.length > 0) {
    let char = s.charAt(0);
    if (s.length > 1 &&     // case 1: "4" or "9" - two chars as 1 value
        ['I', 'X', 'C'].includes(char) &&
        values[s.charAt(1)] > values[char]) {
      num += values[s.charAt(1)] - values[char];
      s = s.substr(2);
    } else {                // case 2: others - 1 char as 1 value
      num += values[char];
      s = s.substr(1);
    }
  }
  return num;
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
