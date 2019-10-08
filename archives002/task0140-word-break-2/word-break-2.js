/**
 * DFS
 * @param {string}      s           the string to split
 * @param {string[]}    wordDict    the dictionary
 * @return {string[]}               all possible solutions
 */
const wordBreak = function(s, wordDict) {
  const dfs = (s, wordDict, map) => {
    if (map[s]) {
      return map[s];
    } else if (s.length === 0) {
      return [s];
    }
    const res = [];
    for (let word of wordDict) {
      if (!s.startsWith(word)) {
        continue ;
      }
      for (let sub of dfs(s.substring(word.length), wordDict, map)) {
        res.push((word + ' ' + sub).trim());
      }
    }
    map[s] = res;
    return res;
  };
  return dfs(s, wordDict, {});
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0140 - Word Break II:');
  [
    ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
    ['pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
  ].forEach( vs => {
    console.log(`  str="${vs[0]}", dict=[${vs[1].map( s=>`'${s}'`).join(', ')}]`);
    for (let re of wordBreak(vs[0], vs[1])) {
      console.log(`    "${re}"`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
