/**
 * @param {number[]}  nums    the number array
 * @return {number}           the single number
 */
const singleNumber = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0136 - Single Number:');
  [
    [2, 2, 1],
    [4, 1, 2, 1, 2],
  ].forEach( vs => {
    console.log(`  single=${singleNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
