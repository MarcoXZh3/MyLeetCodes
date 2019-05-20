const chars = {
  '2': [ 'a', 'b', 'c' ],
  '3': [ 'd', 'e', 'f' ],
  '4': [ 'g', 'h', 'i' ],
  '5': [ 'j', 'k', 'l' ],
  '6': [ 'm', 'n', 'o' ],
  '7': [ 'p', 'q', 'r', 's' ],
  '8': [ 't', 'u', 'v' ],
  '9': [ 'w', 'x', 'z', 'y' ],
};


/**
 * recursion
 * @param {string}    digits    the digits on a phone pad
 * @return {string[]}           the string combinitions
 */
const letterCombinations1 = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  const char0 = digits.charAt(0);
  const words0 = chars[char0];
  if (digits.length === 1) {
    return words0;
  }
  const words = [];
  const words1 = letterCombinations1(digits.substr(1));
  for (let i = 0; i < words0.length; i++) {
    for (let j = 0; j < words1.length; j++) {
      words.push(`${words0[i]}${words1[j]}`);
    }
  }
  return words;
};


/**
 * loop the list: after the `n`-th digit applied, length of all words will be `n`
 * @param {string}    digits    the digits on a phone pad
 * @return {string[]}           the string combinitions
 */
const letterCombinations = function(digits) {
  const words = [];
  for (let i = 0; i < digits.length; i++) {
    const num = parseInt(digits.charAt(i));
    const words1 = chars[`${num}`];
    // append current digit's words to all, until length of none matches anymore
    while (words.length === 0 || words[0].length === i) {
      const head = words.length === 0 ? '' : words.shift();
      for (let j = 0; j < words1.length; j++) {
        words.push(`${head}${words1[j]}`);
      }
    }
  }
  return words;
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
