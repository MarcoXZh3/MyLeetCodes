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
  console.log('Task 0137 - Single Number II:');
  [
    [2, 2, 3, 2],
    [0, 1, 0, 1, 0, 1, 99],
  ].forEach( vs => {
    console.log(`  single=${singleNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
