/**
 * @param {number[]}    nums      the number array
 * @param {number}      k         max index distance
 * @return {boolean}              whether duplicates exist or not
 */
const containsNearbyDuplicate = function(nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if ((`${nums[i]}` in map) && i - map[`${nums[i]}`] <= k) {
      return true;
    } else {
      map[`${nums[i]}`] = i;
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0219 - Contains Duplicate II:');
  [
    [3, [1, 2, 3, 1]],
    [1, [1, 0, 1, 1]],
    [2, [1, 2, 3, 1, 2, 3]],
  ].forEach( vs => {
    console.log(`  found=${containsNearbyDuplicate(vs[1], vs[0])}, k=${vs[0]}, nums=[${vs[1].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
