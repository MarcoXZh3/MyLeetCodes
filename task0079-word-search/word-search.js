/**
 * @param {character[][]}   board   the board of letters
 * @param {string}          word    the word to search
 * @return {boolean}                whether the word is in the board or not
 */
const exist = function(board, word) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0079 - Word Search:');
  [
    [
      [ ['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E'] ], 'ABCCED',
    ],
    [
      [ ['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E'] ], 'SEE',
    ],
    [
      [ ['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E'] ], 'ABCB',
    ],
  ].forEach( vs => {
    for (let row of vs[0]) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  word="${vs[1]}", exist=${exist(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
