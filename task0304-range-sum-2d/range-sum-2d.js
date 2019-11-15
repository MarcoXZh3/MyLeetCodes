/**
 * @param {number[][]}    matrix    the 2d number array
 */
const NumMatrix = function(matrix) {
  /** 
   * @param {number}      row1      index of 1st row
   * @param {number}      col1      index of 1st column
   * @param {number}      row2      index of 2nd row
   * @param {number}      col2      index of 2nd column
   * @return {number}               the summation between the given area
   */
  this.sumRegion = (row1, col1, row2, col2) => {

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
