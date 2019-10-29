/**
 * basic search row by column
 * @param {number[][]}  matrix    the number matrix
 * @param {number}      target    the number to search
 * @return {boolean}              whether found or not
 */
const searchMatrix0 = function(matrix, target) {
  for (let i = 0; i < matrix.length && matrix[i][0] <= target; i++) {
    for (let j = 0; j < matrix[i].length && matrix[i][j] <= target; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};


/**
 * basic search row by column
 * @param {number[][]}  matrix    the number matrix
 * @param {number}      target    the number to search
 * @return {boolean}              whether found or not
 */
const searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) {
    return false;
  }
  let col = matrix[0].length - 1;
  let row = 0;
  while (col >= 0 && row <= matrix.length - 1) {
    if (target === matrix[row][col]) {
      return true;
    } else if (target < matrix[row][col]) {
        col --;
    } else if (target > matrix[row][col]) {
        row ++;
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0240 - Search a 2D Matrix II:');
  [
    [
      5,
      [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
    ],
    [
      20,
      [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
    ],
    [
      13,
      [
        [1,  3,  5,  7,  9 ],
        [2,  4,  6,  8,  10],
        [11, 13, 15, 17, 19],
        [12, 14, 16, 18, 20],
        [21, 22, 23, 24, 25],
      ],
    ],
  ].forEach( vs => {
    for (let i = 0; i < vs[1].length; i++) {
      console.log(`  [${vs[1][i].join(', ')}]`);
    }
    console.log(`  target=${vs[0]}, found=${searchMatrix(vs[1], vs[0])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
