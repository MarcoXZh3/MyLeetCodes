/**
 * @param {string}    num       the original number
 * @param {number}    k         number of digits to be deleted
 * @return {string}             the minimum number after removing
 */
const removeKdigits = function(num, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0402 - Remove K Digits:');
  [
    ['1432219', 3],
    ['10200', 1],
    ['10', 2],
  ].forEach( vs => {
    console.log(`  num=${vs[0]}, k=${vs[1]} target=${removeKdigits(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
