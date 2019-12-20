/**
 * @param {number[]}    nums    the number array
 */
const Solution0 = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const k = `${nums[i]}`;
    map[k] = map[k] || [];
    map[k].push(i);
  }

  /** 
   * @param {number}    target    the number to pick
   * @return {number}             a random index of the target number
   */
  this.pick = (target) => {
    const idxs = map[`${target}`];
    return idxs[Math.floor(Math.random() * idxs.length)];
  };
};


/**
 * @param {number[]}    nums    the number array
 */
const Solution = function(nums) {
  /** 
   * @param {number}    target    the number to pick
   * @return {number}             a random index of the target number
   */
  this.pick = (target) => {
    let re = -1;
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== target) {
        continue ;
      }
      if (Math.floor(Math.random() * (++ cnt)) === 0) {
        re = i;
      }
    }
    return re;
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
