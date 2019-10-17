/**
 * @param {character[][]} board   the board of letters
 * @param {string[]}      words   the words to filter
 * @return {string[]}             the filtered words
 */
const findWords = function(board, words) {
  return words;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0212 - Word Search II:');
  [
    [
      [ ['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v'] ],
      [ 'oath', 'pea', 'eat', 'rain' ],
    ],
  ].forEach( vs => {
    for (let row of vs[0]) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  words=${JSON.stringify(vs[1])}`);
    console.log(`  exits=${JSON.stringify(findWords(vs[0], vs[1]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
