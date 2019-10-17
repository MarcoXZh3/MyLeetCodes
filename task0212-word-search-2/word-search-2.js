/**
 * @param {character[][]} board   the board of letters
 * @param {string[]}      words   the words to filter
 * @return {string[]}             the filtered words
 */
const findWords = function(board, words) {
  const dfs = function(board, i, j, word) {
    // check the first char
    if (board[i][j] !== word.charAt(0)) {
      return false;
    }
    // mark the current char as visited
    board[i][j] += '!';
    // check the next chars recursively
    const sub = word.substring(1);
    // no more chars, or all next chars matched - fully matched
    if (sub.length === 0 ||
        i - 1 >= 0 && dfs(board, i - 1, j, sub) ||
        i + 1 < board.length && dfs(board, i + 1, j, sub) ||
        j - 1 >= 0 && dfs(board, i, j - 1, sub) ||
        j + 1 < board[0].length && dfs(board, i, j + 1, sub)) {
      return true;
    }
    // otherwise restore the current char and return not matched
    board[i][j] = board[i][j].charAt(0);
    return false;
  };

  // filter out the words
  return words.filter( word => {
    const cp = JSON.parse(JSON.stringify(board));
    for (let i = 0; i < cp.length; i++) {
      for (let j = 0; j < cp[0].length; j++) {
        if (dfs(cp, i, j, word)) {
          return true;
        }
      }
    }
    return false;
  });
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
