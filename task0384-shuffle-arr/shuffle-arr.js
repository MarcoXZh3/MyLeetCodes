/**
 * @param {number[]}    nums    the number array
 */
const Solution0 = function(nums) {
  const bk = nums.slice();
  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}     the original array
   */
  this.reset = () => {
    return bk.slice();
  };

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}     the shuffled array
   */
  this.shuffle = () => {
    const arr = bk.slice();
    const res = [];
    while (arr.length > 0) {
      res.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    return res;
  };
};


/**
 * @param {number[]}    nums    the number array
 */
const Solution = function(nums) {
  const arr = nums.slice();
  const bk = nums.slice();
  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}     the original array
   */
  this.reset = () => {
    return bk.slice();
  };

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}     the shuffled array
   */
  this.shuffle = () => {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (arr.length - i) + i);
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
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
