/**
 * @param {number[][]}    itvs      the original intervals
 * @param {number[]}      itv       the new intervals to be inserted
 * @return {number[][]}             the merged intevals
 */
const insert = function(itvs, itv) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0057 - Insert Interval:');
  [
    [
      [ [1, 3], [6, 9] ], [15, 18]
    ],
    [
      [ [1, 2], [3, 5], [6, 7], [8, 10], [12, 16] ], [4, 8]
    ],
  ].forEach( vs => {
    const itv = `[${vs[1].join(',')}]`;
    const itvs = `[${vs[0].map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    const merged = `[${insert(vs[0], vs[1]).map( v=>`[${v.join(',')}]` ).join(', ')}]`;
    console.log(`  itv=${itv}, itvs=${itvs}, merged=${merged}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
