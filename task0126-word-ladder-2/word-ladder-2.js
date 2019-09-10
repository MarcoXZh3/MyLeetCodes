/**
 * @param {string}    beginWord   the 1st word
 * @param {string}    endWord     the 2nd word
 * @param {string[]}  wordList    the dictionary
 * @return {string[][]}           all shortest solutions
 */
const findLadders = function(beginWord, endWord, wordList) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0126 - Word Ladder II:');
  [
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
  ].forEach( vs => {
    console.log(`  s1="${vs[0]}", s2="${vs[1]}", dict=[${vs[2].map(s=>`"${s}"`).join(', ')}]`);
    findLadders(vs[0], vs[1], vs[2]).forEach( (e, i, a) => {
      console.log(`  ${i+1}/${a.length}: [${e.map(x=>`"${x}"`)}]`);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
