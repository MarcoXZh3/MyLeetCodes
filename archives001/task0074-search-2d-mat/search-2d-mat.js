/**
 * @param {number[][]}      matrix    the matrix to search
 * @param {number}          target    the target value
 * @return {boolean}                  weather the target value is in the matrix
 */
const searchMatrix0 = function(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let c = 0;
  let r = 0;
  while (r < matrix.length && c < matrix[0].length) {
    if (matrix[r][c] === target) {          // found
      return true;
    } else if (matrix[r][c] > target) {     // only larger values left
      return false;
    } else if (r + 1 < matrix.length && matrix[r + 1][c] <= target) { // rows first
      r ++;
    } else {                                // columns next
      c ++;
    }
  }
  return false;
};


/**
 * binary search the matrix as a list
 * @param {number[][]}      matrix    the matrix to search
 * @param {number}          target    the target value
 * @return {boolean}                  weather the target value is in the matrix
 */
const searchMatrix = function(matrix, target) {
  let start = 0;
  let end = matrix.length * matrix[0].length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let r = Math.floor(mid / matrix[0].length);
    let c = mid % matrix[0].length;
    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
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
    [
      [
        [1],
      ],
      1,
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
