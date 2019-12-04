/**
 * @param {number[]}    nums      the number array
 * @param {number}      lower     the minimum range sum
 * @param {number}      upper     the maximum range sum
 * @return {number}               how many valid ranges
 */
const countRangeSum = function(nums, lower, upper) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0327 - Count of Range Sum:');
  [
    [-2, 2, [2, 5, -1]],
  ].forEach( vs => {
    const cnt = countRangeSum(vs[2], vs[0], vs[1]);
    console.log(`  cnt=${cnt}, min=${vs[0]}, max=${vs[1]}, nums=${JSON.stringify(vs[2])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
