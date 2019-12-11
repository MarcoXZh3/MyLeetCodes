/**
 * @param {number[]}    nums      the number array
 * @param {number}      k         number of top frequent elements
 * @return {number[]}             the elements
 */
const topKFrequent = function(nums, k) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0347 - Top K Frequent Elements:');
  [
    [2, [1, 1, 1, 2, 2, 3]],
    [1, [1]]
  ].forEach( vs => {
    console.log(`  k=${vs[0]}, num=${JSON.stringify(vs[1])}, top=${JSON.stringify(topKFrequent(vs[1], vs[0]))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
