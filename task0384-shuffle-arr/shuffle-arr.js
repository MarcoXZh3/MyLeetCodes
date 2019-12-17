/**
 * @param {number[]}    nums    the number array
 */
const Solution = function(nums) {
  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}     the original array
   */
  this.reset = () => {
  };

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}     the shuffled array
   */
  this.shuffle = () => {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0384 - Shuffle an Array:');
  [
    [1, 2, 3],
  ].forEach( vs => {
    const sol = new Solution(vs);
    for (let i = 0; i < vs.length; i++) {
      console.log(`  shuffle=${JSON.stringify(sol.shuffle())},` +
                     ` reset=${JSON.stringify(sol.reset())},` +
                     ` arr=${JSON.stringify(vs)}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
