/**
 * @param {character[][]}     grid    the 2D array of water/island
 * @return {number}                   number of islands
 */
const numIslands = function(grid) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0200 - Number of Islands:');
  [
    [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  cnt=${numIslands(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
