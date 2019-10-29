/**
 * @param {number[][]}  matrix    the number matrix
 * @param {number}      target    the number to search
 * @return {boolean}              whether found or not
 */
const searchMatrix = function(matrix, target) {

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
