/**
 * @param {number[]}  nums    the number array
 * @return {number}           the max product
 */
const maxProduct = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0152 - Maximum Product Subarray:');
  [
    [2, 3, -2, 4],
    [-2, 0, -1],
  ].forEach( vs => {
    console.log(`  max=${maxProduct(vs)}, arr=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
