/**
 * @param {string}    pattern     the pattern string
 * @param {string}    str         the string to match the pattern
 * @return {boolean}              whether match or not
 */
const wordPattern = function(pattern, str) {

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
  ].forEach( vs => {
    console.log(`  match=${wordPattern(vs[0], vs[1])}, pattern="${vs[0]}", str="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
