/**
 * @param {string}    beginWord   the 1st word
 * @param {string}    endWord     the 2nd word
 * @param {string[]}  wordList    the dictionary
 * @return {number}               how many changes needed
 */
const ladderLength = function(beginWord, endWord, wordList) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0127 - Word Ladder:');
  [
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
    ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
  ].forEach( vs => {
    console.log(`  ladder=${ladderLength(vs[0], vs[1], vs[2])}, s1="${vs[0]}", s2="${vs[1]}"`);
    console.log(`  dict=[${vs[2].map(s=>`"${s}"`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
