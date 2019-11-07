/**
 * @param {string}    pattern     the pattern string
 * @param {string}    str         the string to match the pattern
 * @return {boolean}              whether match or not
 */
const wordPattern = function(pattern, str) {
  const dict1 = {};
  const dict2 = {};
  str = str.split(' ');
  if (str.length !== pattern.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern.charAt(i);
    const sub = str[i];
    if (!dict1[char]) {
      if (dict2[sub]) {
        return false;
      }
      dict1[char] = sub;
      dict2[sub] = char;
    } else if (dict1[char] !== sub  || dict2[sub] !== char) {
      return false;
    }
  }
  return true;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0290 - Word Pattern:');
  [
    ['abba', 'dog cat cat dog'],
    ['abba', 'dog cat cat fish'],
    ['aaaa', 'dog cat cat dog'],
    ['abba', 'dog dog dog dog'],
    ['abc', 'b c a'],
  ].forEach( vs => {
    console.log(`  match=${wordPattern(vs[0], vs[1])}, pattern="${vs[0]}", str="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
