/**
 * @param {number[]}  nums    the number array
 * @return {number}           the target number in the array
 */
const thirdMax = function(nums) {
  let max = Array(3).fill(Number.MIN_SAFE_INTEGER);
  for (let num of nums) {
    if (num === max[0] || num === max[1] || num === max[2]) {
      continue ;
    } else if (num > max[0]) {
      max = [num, max[0], max[1]];
    } else if (num > max[1]) {
      max = [max[0], num, max[1]];
    } else if (num > max[2]) {
      max = [max[0], max[1], num];
    }
  }
  return max[2] === Number.MIN_SAFE_INTEGER ? max[0] : max[2];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0414 - Third Maximum Number:');
  [
    [3, 2, 1],
    [1, 2],
    [2, 2, 3, 1],
  ].forEach( vs => {
    console.log(`  target=${thirdMax(vs)}, arr=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
