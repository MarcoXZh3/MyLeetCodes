/**
 * DFS:
 * 1) mark boarder 'O's as '*' (fixed 'O's that won't be flipped);
 * 2) mark neighbor 'O's of the boarder 'O's as fixed 'O's, too, by DFS;
 * 3) go through the board, flipping rest 'O's to 'X'es, and revert fixed 'O's,
 *    the current '*'s, back to 'O's
 * @param {character[][]}     board     the original board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
  const dfs = (i, j) => {
    if (i <= 0 || i >= board.length - 1 ||
        j <= 0 || j >= board[0].length - 1 ||         // beyond the board
        board[i][j] === 'X' ||      // 'X' will still be 'X'
        board[i][j] === '*') {      // fixed 'O's will be 'O's
      return ;
    }
    board[i][j] = '*';      // neighbor 'O's of fixed 'O's' are fixed, too
    dfs(i + 1, j);          // DFS the neighbor 'O's
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  if (!board || board.length === 0 || board[0].length === 0) {
    return ;
  }
  const m = board.length;
  const n = board[0].length;
  // DFS fixed 'O's of first and last row
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      dfs(i, 1);
    }
    if (board[i][n - 1] === 'O') {
      dfs(i, n - 2);
    }
  }
  // DFS fixed 'O's of first and last column
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      dfs(1, j);
    }
    if (board[m - 1][j] === 'O') {
      dfs(m - 2, j);
    }
  }
  // go through the board for flips
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === '*') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0130 - Surrounded Regions:');
  [
    [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ],
    [
      ['O', 'X', 'X', 'O', 'X'],
      ['X', 'O', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O']
    ],
  ].forEach( vs => {
    const cp = JSON.parse(JSON.stringify(vs));
    solve(vs);
    vs.forEach( (r, i) => {
      let line = i === 0 ? 'Before: ' : '        ';
      line += cp[i].join(' ');
      line += i === 0 ? '  After: ' : '         ';
      line += r.join(' ');
      console.log(line);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
