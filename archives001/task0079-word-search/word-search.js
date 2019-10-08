/**
 * @param {character[][]} board   the board of letters
 * @param {number}        i       row index to check the current char
 * @param {number}        j       column index to check the current char
 * @param {string}        word    the current word to check
 */
const backtracking = function(board, i, j, word) {
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
      i - 1 >= 0 && backtracking(board, i - 1, j, sub) ||
      i + 1 < board.length && backtracking(board, i + 1, j, sub) ||
      j - 1 >= 0 && backtracking(board, i, j - 1, sub) ||
      j + 1 < board[0].length && backtracking(board, i, j + 1, sub)) {
    return true;
  }
  // otherwise restore the current char and return not matched
  board[i][j] = board[i][j].charAt(0);
  return false;
};


/**
 * @param {character[][]}   board   the board of letters
 * @param {string}          word    the word to search
 * @return {boolean}                whether the word is in the board or not
 */
const exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtracking(board, i, j, word)) {
        return true;
      }
    }
  }
  return false;
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
