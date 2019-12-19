/**
 * @param {number[]}      A     the number array
 * @return {number}             max return value of all rotate functions
 */
const maxRotateFunction = function(A) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0396 - Rotate Function:');
  [
    [4, 3, 2, 6],
  ].forEach( vs => {
    console.log(`  max=${maxRotateFunction(vs)}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
