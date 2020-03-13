/**
 * @param {number[]}  nums    the number array
 * @return {number}           the target number in the array
 */
const thirdMax = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0414 - Third Maximum Number:');
  [
    [3, 2, 1],
    [1, 2],
    [2, 2, 3, 1],
  ].forEach( vs => {
    console.log(`  target=${thirdMax(vs)}, arr=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
