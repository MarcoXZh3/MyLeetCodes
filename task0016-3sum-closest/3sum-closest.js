/**
 * @param {number[]}    nums      the list of numbers
 * @param {number}      target    the target of sum
 * @return {number}               the closest sum
 */
const threeSumClosest = function(nums, target) {

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
