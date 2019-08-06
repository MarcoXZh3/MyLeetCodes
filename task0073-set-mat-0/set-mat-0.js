/**
 * @param {number[][]}    matrix    the matrix to set zeros
 * @return {void}         Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {

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
