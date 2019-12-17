/**
 * @param {number[][]}      matrix    the matrix
 * @param {number}          k         the kth max
 * @return {number}                   the target number
 */
const kthSmallest = function(matrix, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0378 - Kth Smallest Element in a Sorted Matrix:');
  [
    [
      [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
      ], 8,
    ],
  ].forEach( vs => {
    vs[0].forEach( row => {
      console.log(`  ${row.join(' ')}`);
    })
    console.log(`  target=${vs[1]}, re=${kthSmallest(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
