/**
 * @param {number[][]}    matrix    the water matrix
 * @return {number[][]}             the positions of water flow
 */
const pacificAtlantic = function(matrix) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0417 - Pacific Atlantic Water Flow:');
  [
    [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  pos=${JSON.stringify(pacificAtlantic(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
