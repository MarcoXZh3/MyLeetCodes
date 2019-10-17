/**
 * @param {number}          numCourses      total number of courses
 * @param {number[][]}      prerequisites   course prerequisites
 * @return {boolean}                        whether possible to finish all
 * @return {number[]}                       the order of taking courses
 */
const findOrder = function(numCourses, prerequisites) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0210 - Course Schedule II:');
  [
    [2, [[1, 0]]],
    [4, [[1, 0], [2, 0], [3, 1], [3, 2]]],
  ].forEach( vs => {
    console.log(`  pres=[${vs[1].map(e=>`[${e.join(',')}]`).join(', ')}]`);
    console.log(`  total=${vs[0]}, order=[${findOrder(vs[0], vs[1]).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
