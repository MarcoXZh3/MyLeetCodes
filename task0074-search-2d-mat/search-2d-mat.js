/**
 * @param {number[][]}      matrix    the matrix to search
 * @param {number}          target    the target value
 * @return {boolean}                  weather the target value is in the matrix
 */
const searchMatrix = function(matrix, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0074 - Search a 2D Matrix:');
  [
    [
      [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ],
      3,
    ],
    [
      [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ],
      13,
    ],
  ].forEach( vs => {
    for (let i = 0; i < vs[0].length; i++) {
      console.log(`  [${vs[0][i].join(', ')}]`);
    }
    console.log(`  target=${vs[1]}, found=${searchMatrix(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
