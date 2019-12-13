/**
 * @param {number}      a   the base number
 * @param {number[]}    b   the digits of the exponent
 * @return {number}         a ^ b % 1337
 */
const superPow = function(a, b) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0372 - Super Pow:');
  [
    [2, [3] ],
    [2, [1, 0] ],
  ].forEach( vs => {
    console.log(`  re=${superPow(...vs)}, a=${vs[0]}, b=${vs[1].join('')}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
