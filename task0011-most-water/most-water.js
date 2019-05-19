/**
 * @param {number[]}    height    the list of heights
 * @return {number}               the max area
 */
const maxArea = function(height) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0011 - Container With Most Water:');
  [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
  ].forEach( vs => {
    console.log(`  max="${maxArea(vs)}", heights=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
