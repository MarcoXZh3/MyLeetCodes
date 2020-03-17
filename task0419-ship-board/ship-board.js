/**
 * @param {character[][]}   board   the ship board
 * @return {number}                 how many ships in the board
 */
const countBattleships = function(board) {
  const m = board.length;
  if (m === 0) {
    return 0;
  }
  const n = board[0].length;
  let re = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.' ||
          i > 0 && board[i - 1][j] === 'X' ||
          j > 0 && board[i][j - 1] === 'X') {
        continue ;
      }
      re ++;
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0419 - Battleships in a Board:');
  [
    [
      ['X', '.', '.', 'X'],
      ['.', '.', '.', 'X'],
      ['.', '.', '.', 'X'],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join('')}`);
    });
    console.log(`  ships=${countBattleships(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
