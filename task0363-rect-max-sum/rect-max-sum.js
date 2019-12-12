/**
 * @param {number[][]}    matrix    the number matrix
 * @param {number}        k         the upper bound of sums
 * @return {number}                 the max sum
 */
const maxSumSubmatrix = function(matrix, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0363 - Max Sum of Rectangle No Larger Than K:');
  [
    [2, [ [1, 0, 1], [0, -2, 3] ] ],
  ].forEach( vs => {
    vs[1].forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  k=${vs[0]}, sum=${maxSumSubmatrix(vs[1], vs[0])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
