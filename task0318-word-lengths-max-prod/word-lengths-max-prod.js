/**
 * use binaries to represent words and bit wise and to check duplicated letters
 * @param {string[]}    words     the word list
 * @return {number}               the maximum product
 */
const maxProduct = function(words) {
  const masks = Array(words.length).fill(0);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      masks[i] |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
    }
  }

  let max = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  return max;
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
