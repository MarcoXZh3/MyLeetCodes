/**
 * @param {number}    m   rows of the board
 * @param {number}    n   columns of the board
 * @return {number}       number of unique paths
 */
const uniquePaths = function(m, n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0062 - Unique Paths:');
  [
    [3, 2],
    [7, 3],
  ].forEach( vs => {
    console.log(`  m=${vs[0]}, n=${vs[1]}, re=${uniquePaths(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
