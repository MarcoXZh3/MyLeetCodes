/**
 * @param {character[][]}   board   the ship board
 * @return {number}                 how many ships in the board
 */
const countBattleships = function(board) {

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
