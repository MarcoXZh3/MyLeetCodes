/**
 * @param {number[]}    nums    coins for the balloon
 * @return {number}             max number of coin
 */
const maxCoins = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0312 - Burst Balloons:');
  [
    [3, 1, 5, 8],
  ].forEach( vs => {
    const bk = vs.slice();
    console.log(`  max=${maxCoins(vs)}; nums=${JSON.stringify(bk)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
