/**
 * @param {number[]}    nums    the number array
 */
const Solution = function(nums) {
  /** 
   * @param {number}    target    the number to pick
   * @return {number}             a random index of the target number
   */
  this.pick = (target) => {
  };
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0398 - Random Pick Index:');
  [
    [1, 2, 3, 3, 3],
  ].forEach( vs => {
    const sol = new Solution(vs);
    console.log(`  const sol = new Solution(${JSON.stringify(vs)})`);
    for (let i = 0; i < vs.length; i++) {
      console.log(`  sol.pick(${vs[i]});    // ${sol.pick(vs[i])}`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
