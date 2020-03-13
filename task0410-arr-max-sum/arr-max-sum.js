/**
 * @param {number[]}    nums    the number array
 * @param {number}      m       how many to split
 * @return {number}             the max sum
 */
const splitArray = function(nums, m) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0410 - Split Array Largest Sum:');
  [
    [[7,2,5,10,8], 2],
  ].forEach( vs => {
    console.log(`  arr=${JSON.stringify(vs[0])}, m=${vs[1]}; max=${splitArray(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
