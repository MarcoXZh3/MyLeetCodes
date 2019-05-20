/**
 * @param {number[]}    nums      the list of numbers
 * @param {number}      target    the target of sum
 * @return {number}               the closest sum
 */
const threeSumClosest = function(nums, target) {
  let re = nums[0] + nums[1] + nums[nums.length - 1];
  nums = nums.sort( (a,b)=>a-b );
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum > target) {
        k --;
      } else {
        j ++;
      }
      if (Math.abs(sum - target) < Math.abs(re - target)) {
        re = sum;
      }
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0016 - 3 Sum Closest:');
  [
    [[-1, 2, 1, -4], 1],
  ].forEach( vs => {
    console.log(`  source=[${vs[0].join(', ')}]`);
    console.log(`  target=${vs[1]}, closest=${threeSumClosest(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
