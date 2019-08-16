/**
 * @param {character[][]}   matrix    the matrix to search for rectangles
 * @return {number}                   the area of the max rectangle
 */
const maximalRectangle = function(matrix) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0085 - Maximal Rectangle:');
  [
    [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  max=${maximalRectangle(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
