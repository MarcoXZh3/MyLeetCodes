/**
 * @param {number}      num     the number to check
 * @return {boolean}            whether is perfect square or not
 */
const isPerfectSquare = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0367 - Valid Perfect Square:');
  [
    16,
    14,
  ].forEach( v => {
    console.log(`  num=${v}, perfect=${isPerfectSquare(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
