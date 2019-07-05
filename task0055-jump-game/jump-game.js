/**
 * @param {number[]}  nums    numbers of jumps
 * @return {boolean}          whether could reach end or not
 */
const canJump = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0055 - Jump Game:');
  [
    [2, 3, 1, 1, 4],
    [3, 2, 1, 0, 4],
  ].forEach( vs => {
    console.log(`  can=${canJump(vs)}, jumps=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
