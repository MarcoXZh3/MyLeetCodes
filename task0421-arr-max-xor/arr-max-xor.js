/**
 * @param {number[]}    nums    the number array
 * @return {number}             max XOR of two numbers in the array
 */
const findMaximumXOR = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0421 - Maximum XOR of Two Numbers in an Array:');
  [
    [3, 10, 5, 25, 2, 8],
  ].forEach( vs => {
    console.log(`  max=${findMaximumXOR(vs)}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
