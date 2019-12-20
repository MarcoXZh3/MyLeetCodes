/**
 * intuitive - count and sort by occurrences
 * @param {number[]}    nums      the number array
 * @param {number}      k         number of top frequent elements
 * @return {number[]}             the elements
 */
const topKFrequent = function(nums, k) {
  const map = {};
  for (let n of nums) {
    map[`${n}`] = 1 + (map[`${n}`] || 0);
  }
  return Object.keys(map).sort( (a,b)=>map[b]-map[a] )
               .map( x=>parseInt(x, 10) ).slice(0, k);
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
