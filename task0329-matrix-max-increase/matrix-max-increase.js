/**
 * @param {number[][]}    matrix      the number matrix
 * @return {number}                   the length of the longest increase path
 */
const longestIncreasingPath = function(matrix) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0329 - Longest Increasing Path in a Matrix:');
  [
    [ [9, 9, 4], [6, 6, 8], [2, 1, 1] ],
    [ [3, 4, 5], [3, 2, 6], [2, 2, 1] ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  max=${longestIncreasingPath(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
