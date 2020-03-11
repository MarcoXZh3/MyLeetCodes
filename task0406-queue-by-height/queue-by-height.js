/**
 * @param {number[][]}    people    the queue of people with heights
 * @return {number[][]}             the new queue by heights
 */
const reconstructQueue = function(people) {
  // sort first by height Z to A, then by k A to Z
  people = people.sort( (a, b) => b[0] === a[0] ? a[1] - b[1] : b[0] - a[0] );
  const res = [];
  for (let p of people) {
    res.splice(p[1], 0, p);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0406 - Queue Reconstruction by Height:');
  [
    [ [7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2] ],
  ].forEach( vs => {
    console.log(`  q1=${JSON.stringify(vs)}`);
    console.log(`  q2=${JSON.stringify(reconstructQueue(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
