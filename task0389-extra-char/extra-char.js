/**
 * @param {string}        s     the 1st string
 * @param {string}        t     the 2nd string
 * @return {character}          the char that is added to t
 */
const findTheDifference0 = function(s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    map[char] = 1 + (map[char] || 0);
  }
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    if (!map[char] || --map[char] < 0) {
      return char;
    }
  }
  return '';
};


/**
 * @param {string}        s     the 1st string
 * @param {string}        t     the 2nd string
 * @return {character}          the char that is added to t
 */
const findTheDifference = function(s, t) {
  let code = 0;
  for (let i = 0; i < s.length; i++) {
    code ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    code ^= t.charCodeAt(i);
  }
  return String.fromCharCode(code);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0389 - Find the Difference:');
  [
    ['abcd', 'abcde'],
  ].forEach( vs => {
    console.log(`  char='${findTheDifference(...vs)}', s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
