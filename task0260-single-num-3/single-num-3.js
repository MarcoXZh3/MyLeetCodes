/**
 * @param {number[]}    nums    the number array
 * @return {number[]}           the numbers only show once
 */
const singleNumber = function(nums) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0260 - Single Number III:');
  [
    [1, 2, 1, 3, 2, 5],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}], single=[${singleNumber(vs).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
