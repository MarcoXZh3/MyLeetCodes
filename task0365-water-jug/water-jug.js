/**
 * @param {number}      x     capacity of the 1st jug
 * @param {number}      y     capacity of the 2nd jug
 * @param {number}      z     water to get
 * @return {boolean}          whether solvable or not
 */
const canMeasureWater = function(x, y, z) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0365 - Water and Jug Problem:');
  [
    [3, 5, 4],
    [2, 6, 5],
  ].forEach( vs => {
    console.log(`  re=${canMeasureWater(...vs)}, x=${vs[0]}, y=${vs[1]}, z=${vs[2]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
