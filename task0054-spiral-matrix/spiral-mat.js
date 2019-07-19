/**
 * @param {number[][]}  matrix    the number matrix
 * @return {number[]}             the spiral matrix
 */
const spiralOrder = function(matrix) {

  return [1,2,3,4,5,6];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0054 - Spiral Matrix:');
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}],`);
    }
    console.log(`spiral=[${spiralOrder(vs).join(', ')}];`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
