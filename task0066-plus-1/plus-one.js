/**
 * @param {number[]}    digits    the number in digits array
 * @return {number[]}             the digits array of the number plus 1
 */
const plusOne = function(digits) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0066 - Plus One:');
  [
    [1, 2, 3],
    [4, 3, 2, 1],
  ].forEach( vs => {
    console.log(`  num1=[${vs.join(', ')}]; num2=${plusOne(vs).join('')}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
