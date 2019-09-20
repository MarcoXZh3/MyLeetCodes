/**
 * @param {string}      s           the string to split
 * @param {string[]}    wordDict    the dictionary
 * @return {boolean}                whether the string can be split or not
 */
const wordBreak = function(s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break ;
      }
    }
  }
  return dp[s.length];
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
    ['abcd', ['a','abc','b','cd']],
    ['cars', ['car','ca','rs']],
    ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
     'aaaaaaaab',
     ['a','aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaa','aaaaaaaa','aaaaaaaaa','aaaaaaaaaa']],
  ].forEach( vs => {
    console.log(`  dict=[${vs[1].map( s=>`'${s}'`).join(', ')}]`);
    console.log(`  re=${wordBreak(vs[0], vs[1])}, str='${vs[0]}'`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
