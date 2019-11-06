/**
 * @param {number[][]}    board     the board with lives
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {

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
