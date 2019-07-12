/**
 * @param {number[]}  nums    numbers of jumps
 * @return {number}           minimum jumps
 */
const jump1 = function(nums) {
  let step = 0;
  let start = 0;
  let end = 0;
  while (end < nums.length - 1) {
    step ++;
    let maxEnd = end + 1;
    for (let i = start; i <= end; i++) {
      if (i + nums[i] >= nums.length - 1) {
        return step;
      }
      if (maxEnd < i + nums[i]) {
        maxEnd = i + nums[i];
      }
    }
    start = end + 1;
    end = maxEnd;
  }
  return step;
};


/**
 * @param {number[]}  nums    numbers of jumps
 * @return {number}           minimum jumps
 */
const jump = function(nums) {
  let step = 0;
  let end = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = max > i + nums[i] ? max : i + nums[i];
    if (i === end) {
      step ++;
      end = max;
    }
  }
  return step;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0045 - Jump Game II:');
  [
    [2, 3, 1, 1, 4],
    [2, 0, 0],
  ].forEach( vs => {
    console.log(`  jumps=${jump(vs)}, jumps=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
