/**
 * @param {number[]}    nums    the number array
 * @return {number}             the majority element
 */
const majorityElement = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0169 - Majority Element:');
  [
    [3,2,3],
    [2, 2, 1, 1, 1, 2, 2],
  ].forEach( vs => {
    console.log(`  target=${majorityElement(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
