/**
 * @param {string[]}    words     the word list
 * @return {number}               the maximum product
 */
const maxProduct = function(words) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0318 - Maximum Product of Word Lengths:');
  [
    ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'],
    ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'],
    ['a', 'aa', 'aaa', 'aaaa'],
  ].forEach( vs => {
    console.log(`  max=${maxProduct(vs)}; words=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
