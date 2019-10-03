/**
 * @param {number[][]}    dungeon   the 2D array of the dungeon
 * @return {number}                 minimum health to pass the dungeon
 */
const calculateMinimumHP = function(dungeon) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0174 - Dungeon Game:');
  [
    [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(row.join('\t'));
    });
    console.log(`  min=${calculateMinimumHP(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
