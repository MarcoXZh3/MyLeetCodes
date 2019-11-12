/**
 * @param {number[]}    nums    cashes in houses as a circle
 * @return {number}             max amount to grab
 */
const rob = function(nums) {
  const sub = (i, j) => {
    let include = 0;
    let exclude = 0;
    for (let k = i; k <= j; k++) {
      let inc = include;
      let exc = exclude;
      include = exc + nums[k];
      exclude = Math.max(exc, inc);
    }
    return Math.max(include, exclude);
  };
  return nums.length === 1 ? nums[0] :
         Math.max(sub(0, nums.length - 2), sub(1, nums.length - 1));
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0213 - House Robber II:');
  [
    [2, 3, 2],
    [1, 2, 3, 1],
  ].forEach( vs => {
    console.log(`  max=${rob(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
