/**
 * @param {string}    word1   the word to convert
 * @param {string}    word2   the word to convert to
 * @return {number}           edit distance: number of operations
 */
const minDistance = function(word1, word2) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0072 - Edit Distance:');
  [
    ['horse', 'ros'],
    ['intention', 'execution'],
  ].forEach( vs => {
    console.log(`  dist=${minDistance(vs[0], vs[1])}, word1="${vs[0]}", word2="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
