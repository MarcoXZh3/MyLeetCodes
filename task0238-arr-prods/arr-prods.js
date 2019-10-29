/**
 * @param {number[]}    nums    the number array
 * @return {number[]}           the product array
 */
const productExceptSelf = function(nums) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0238 - Product of Array Except Self:');
  [
    [1, 2, 3, 4],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}]; prods=[${productExceptSelf(vs).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
