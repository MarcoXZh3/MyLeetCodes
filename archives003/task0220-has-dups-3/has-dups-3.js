/**
 * @param {number[]}    nums      the number array
 * @param {number}      k         max number difference
 * @param {number}      t         max index distance
 * @return {boolean}              whether duplicates exist or not
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j - i <= k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0220 - Contains Duplicate III:');
  [
    [3, 0, [1, 2, 3, 1]],
    [1, 2, [1, 0, 1, 1]],
    [2, 3, [1, 5, 9, 1, 5, 9]],
    [1, -1, [-1, -1]],
  ].forEach( vs => {
    console.log(`  nums=[${vs[2].join(', ')}]`);
    console.log(`  found=${containsNearbyAlmostDuplicate(vs[2], vs[0], vs[1])}, k=${vs[0]}, t=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
