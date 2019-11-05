/**
 * @param {number}    n     the number to split
 * @return {number}         least number of squares
 */
const numSquares = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0279 - Perfect Squares:');
  [
    12,
    13,
  ].forEach( v => {
    console.log(`  n=${v}, num=${numSquares(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
