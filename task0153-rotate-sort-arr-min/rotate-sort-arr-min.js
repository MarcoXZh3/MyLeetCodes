/**
 * @param {number[]}  nums    the rotated number array
 * @return {number}           the minimum number in array
 */
const findMin = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0206 - Reverse Linked List:');
  [
    [3, 4, 5, 1, 2],
    [4, 5, 6, 7, 0, 1, 2],
  ].forEach( vs => {
    console.log(`  min=${findMin(vs)}, arr=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
