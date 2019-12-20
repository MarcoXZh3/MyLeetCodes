/**
 * @param {number[][]}    matrix    the 2d number array
 */
const NumMatrix0 = function(matrix) {
  /** 
   * @param {number}      row1      index of 1st row
   * @param {number}      col1      index of 1st column
   * @param {number}      row2      index of 2nd row
   * @param {number}      col2      index of 2nd column
   * @return {number}               the summation between the given area
   */
  this.sumRegion = (row1, col1, row2, col2) => {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += matrix[i][j];
      }
    }
    return sum;
  };
};


/**
 * @param {number[][]}    matrix    the 2d number array
 */
const NumMatrix = function(matrix) {
  const m = matrix ? matrix.length : 0;
  const n = m > 0 ? matrix[0].length : 0;
  const cache = [...Array(m+1).keys()].map( _=>[...Array(n+1).keys()].map( _=>0 ) );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      cache[i+1][j+1] = cache[i+1][j] + cache[i][j+1] + matrix[i][j] - cache[i][j];
    }
  }


  /** 
   * @param {number}      row1      index of 1st row
   * @param {number}      col1      index of 1st column
   * @param {number}      row2      index of 2nd row
   * @param {number}      col2      index of 2nd column
   * @return {number}               the summation between the given area
   */
  this.sumRegion = (row1, col1, row2, col2) => {
    return cache[row2+1][col2+1] + cache[row1][col1]
         - cache[row1][col2+1] - cache[row2+1][col1];
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0304 - Range Sum Query 2D - Immutable:');
  const vs = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ];
  const arr = new NumMatrix(vs);
  console.log(`  const arr = new NumMatrix(${JSON.stringify(vs)});`);
  console.log(`  arr.sumRegion(2, 1, 4, 3);    // ${arr.sumRegion(2, 1, 4, 3)}`);
  console.log(`  arr.sumRegion(1, 1, 2, 2);    // ${arr.sumRegion(1, 1, 2, 2)}`);
  console.log(`  arr.sumRegion(1, 2, 2, 4);    // ${arr.sumRegion(1, 2, 2, 4)}`);
  if (callback) {
    callback();
  }
};


module.exports = main;
