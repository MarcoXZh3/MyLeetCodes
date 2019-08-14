/**
 * @param {number[]}    heights   heights of each unit
 * @return {number}               max rectangle in the histogram
 */
const largestRectangleArea = function(heights) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0084 - Largest Rectangle in Histogram:');
  [
    [2, 1, 5, 6, 2, 3],
  ].forEach( vs => {
    console.log(`  max=${largestRectangleArea(vs)}; hist=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
