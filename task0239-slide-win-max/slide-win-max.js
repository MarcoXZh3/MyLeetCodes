/**
 * @param {number[]}      nums    the number array
 * @param {number}        k       the window size
 * @return {number[]}             the array of max in the windows
 */
const maxSlidingWindow = function(nums, k) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0239 - Sliding Window Maximum:');
  [
    [3, [1, 3, -1, -3, 5, 3, 6, 7]],
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
    console.log(`  res=[${maxSlidingWindow(vs[1], vs[0]).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
