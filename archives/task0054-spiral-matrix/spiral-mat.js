/**
 * simulation A: copy and then delete
 * @param {number[][]}  matrix    the number matrix
 * @return {number[]}             the spiral matrix
 */
const spiralOrder0 = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const re = [];
  const size = matrix.length * matrix[0].length;
  let direction = 0;
  while (re.length < size) {
    if (direction === 0) {            // left to right (top row)
      for (let i = 0; i < matrix[0].length; i++) {
        re.push(matrix[0][i]);
      }
      matrix.shift();
    } else if (direction === 1) {     // top to bottom (right column)
      const j = matrix[0].length - 1;
      for (let i = 0; i < matrix.length; i++) {
        re.push(matrix[i][j]);
        matrix[i].pop();
      }
    } else if (direction === 2) {     // right to left (bottom row)
      const i = matrix.length - 1;
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        re.push(matrix[i][j]);
      }
      matrix.pop();
    } else if (direction == 3) {      // bottom to top (left coloumn)
      for (let i = matrix.length - 1; i >= 0; i--) {
        re.push(matrix[i][0]);
        matrix[i].shift();
      }
    }
    direction = (direction + 1) % 4;
  }
  return re;
};


/**
 * simulation B: copy and then marked as visited
 * @param {number[][]}  matrix    the number matrix
 * @return {number[]}             the spiral matrix
 */
const spiralOrder1 = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const re = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = [...Array(rows).keys()].map( _=>[...Array(cols).keys()].map( _=>false ) );
  const rDir = [0, 1, 0, -1];
  const cDir = [1, 0, -1, 0];
  for (let i = 0, r = 0, c = 0, dir = 0; i < rows * cols; i++) {
    // copy the current and mark as visited
    re.push(matrix[r][c]);
    visited[r][c] = true;
    // try move to next in the same direction
    const rNext = r + rDir[dir];
    const cNext = c + cDir[dir];
    // next available in the same direction
    if (rNext >= 0 && rNext < rows &&
        cNext >= 0 && cNext < cols &&
        !visited[rNext][cNext]) {
      r = rNext;
      c = cNext;
    } else {
      // not available: change direction and then move next
      dir = (dir + 1) % 4;
      r += rDir[dir];
      c += cDir[dir];
    }
  }
  return re;
};


/**
 * extract layer by layer
 * @param {number[][]}  matrix    the number matrix
 * @return {number[]}             the spiral matrix
 */
const spiralOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const re = [];
  let row1 = 0;
  let row2 = matrix.length - 1;
  let col1 = 0;
  let col2 = matrix[0].length - 1;
  while (row1 <= row2 && col1 <= col2) {
    for (let col = col1; col <= col2; col++) {
      re.push(matrix[row1][col]);
    }
    for (let row = row1 + 1; row <= row2; row++) {
      re.push(matrix[row][col2]);
    }
    if (row1 < row2 && col1 < col2) {
      for (let col = col2 - 1; col > col1; col--) {
        re.push(matrix[row2][col]);
      }
      for (let row = row2; row > row1; row--) {
        re.push(matrix[row][col1]);
      }
    }
    // shrink the layer
    row1 ++;
    row2 --;
    col1 ++;
    col2 --;
  }
  return re;
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
