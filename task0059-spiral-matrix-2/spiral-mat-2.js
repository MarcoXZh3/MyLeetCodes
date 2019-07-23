/**
 * @param {number}        n     size of the matrix
 * @return {number[][]}         the spiral matrix
 */
const generateMatrix = function(n) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0059 - Spiral Matrix II:');
  [
    3,
  ].forEach( n => {
    console.log(` n=${n}`);
    for (let row of generateMatrix(n)) {
      console.log(`  [${row.join(', ')}],`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
