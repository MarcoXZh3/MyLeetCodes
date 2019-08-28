/**
 * O(m + n) space
 * @param {number[][]}    matrix    the matrix to set zeros
 * @return {void}         Do not return anything, modify matrix in-place instead.
 */
const setZeroes0 = function(matrix) {
  const rows = Array(matrix.length).fill(1);
  const cols = Array(matrix[0].length).fill(1);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      rows[i] *= matrix[i][j];
      cols[j] *= matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows[i] === 0 || cols[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
};


/**
 * O(m + n) space optimized
 * @param {number[][]}    matrix    the matrix to set zeros
 * @return {void}         Do not return anything, modify matrix in-place instead.
 */
const setZeroes1 = function(matrix) {
  const rows = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        break ;
      }
    }
  }
  const cols = [];
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        cols.push(j);
        break ;
      }
    }
  }
  for (let i of rows) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
    }
  }
  for (let j of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0;
    }
  }
};


/**
 * O(1) space
 * @param {number[][]}    matrix    the matrix to set zeros
 * @return {void}         Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  let col0 = false;     // whether the first column has 0 or not
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      col0 = true;
    }
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (col0) {
      matrix[i][0] = 0;
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0073 - Set Matrix Zeros:');
  [
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
    [
      [1, 1, 1],
      [0, 1, 2],
    ],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    setZeroes(vs);
    for (let i = 0; i < bk.length; i++) {
      console.log(`  [${bk[i].join(', ')}]\t[${vs[i].join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
