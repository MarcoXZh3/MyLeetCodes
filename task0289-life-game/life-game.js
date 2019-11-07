/**
 * O(mn) on space
 * @param {number[][]}    board     the board with lives
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife0 = function(board) {
  const liveNeighbors = (i, j, board) => {
    let total = 0;
    for (let x of [i - 1, i, i + 1].filter( i => i >= 0 && i < board.length )) {
      for (let y of [j - 1, j, j + 1].filter( j => j >= 0 && j < board[0].length )) {
        total += board[x][y];
      }
    }
    return total - board[i][j];
  };
  const bk = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const lives = liveNeighbors(i, j, bk);
      board[i][j] = bk[i][j] === 1 ? ([2, 3].includes(lives) ? 1 : 0) :
                                     ([3].includes(lives) ? 1 : 0);
    }
  }
};


/**
 * O(1) on space - use higher (4, because 0 ~ 8) bits of the int for new state
 * @param {number[][]}    board     the board with lives
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  const m = board.length;
  const n = m > 0 ? board[0].length : 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let total = 0;
      for (let x = Math.max(i - 1, 0); x < Math.min(m, i + 2); x++) {
        for (let y = Math.max(j - 1, 0); y < Math.min(n, j + 2); y++) {
          total += board[x][y] & 1;
        }
      }
      if (total === 3 || total - board[i][j] === 3) {
        board[i][j] |= 2;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] >>= 1;
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0289 - Game of Life:');
  [
    [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    gameOfLife(vs);
    bk.forEach( (e, i) => {
      console.log(`  [${e.join(' ')}]    [${vs[i].join(' ')}]`);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
