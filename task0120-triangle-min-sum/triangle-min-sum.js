/**
 * @param {number[][]}  triangle  the triangle of numbers
 * @return {number}               the minimum sum
 */
const minimumTotal = function(triangle) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0120 - Minimum Sum in Triangle:');
  [
    [
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  min=${minimumTotal(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
