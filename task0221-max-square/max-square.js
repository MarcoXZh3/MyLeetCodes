/**
 * @param {character[][]}     matrix    the 0-1 matrix
 * @return {number}                     area of the max square
 */
const maximalSquare = function(matrix) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0221 - Maximal Square:');
  [
    [
      [1, 0, 1, 0, 0],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0],
    ]
  ].forEach( vs => {
    vs.forEach( row => console.log(row.join(' ')) );
    console.log(`  max=${maximalSquare(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
