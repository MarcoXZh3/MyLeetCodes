/**
 * @param {number[]}  nums    numbers of jumps
 * @return {number}           minimum jumps
 */
const jump = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0045 - Jump Game II:');
  [
    [2, 3, 1, 1, 4],
  ].forEach( vs => {
    console.log(`  jumps=${jump(vs)}, jumps=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
