/**
 * @param {number[]}    nums      the number array
 * @return {boolean}              whether a sub array exists
 */
const increasingTriplet = function(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let mid = Number.MAX_SAFE_INTEGER;
  for (let n of nums) {
    if (n <= min) {
      min = n;
    } else if (n <= mid) {
      mid = n;
    } else {
      return true;
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0333 - Increasing Triplet Subsequence:');
  [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [2, 1, 5, 0, 4, 6],
    [2, 5, 3, 4, 5],
  ].forEach( vs => {
    console.log(`  exists=${increasingTriplet(vs)}, num=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
