/**
 * @param {number[][]}    intervals   a list of intervals
 * @return {number[][]}               the merged version of the intervals
 */
const merge = function(intervals) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0056 - Merge Intervals:');
  [
    [[1, 3], [2, 6], [8, 10], [15, 18]],
    [[1, 4], [4, 5]],
  ].forEach( vs => {
    const itvs = `[${vs.map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    const merged = `[${merge(vs).map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    console.log(`  itvs=${itvs}, merged=${merged}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
