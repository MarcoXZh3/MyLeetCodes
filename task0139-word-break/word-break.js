/**
 * @param {string}      s           the string to split
 * @param {string[]}    wordDict    the dictionary
 * @return {boolean}                whether the string can be split or not
 */
const wordBreak = function(s, wordDict) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0139 - Word Break:');
  [
    ['leetcode', ['leet', 'code']],
    ['applepenapple', ['apple', 'pen']],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
  ].forEach( vs => {
    console.log(`  dict=[${vs[1].map( s=>`"${s}"`).join(', ')}]`);
    console.log(`  re=${wordBreak(vs[0], vs[1])}, str="${vs[0]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
