/**
 * @param {number[]}    nums      the number array
 * @return {boolean}              whether a sub array exists
 */
const increasingTriplet = function(nums) {

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
  ].forEach( vs => {
    console.log(`  exists=${increasingTriplet(vs)}, num=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
