/**
 * @param {number}          numCourses      total number of courses
 * @param {number[][]}      prerequisites   course prerequisites
 * @return {boolean}                        whether possible to finish all
 */
const canFinish = function(numCourses, prerequisites) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0207 - Course Schedule:');
  [
    [2, [[1, 0]]],
    [2, [[1, 0], [0, 1]]],
    [3, [[2, 1], [1, 0]]],
  ].forEach( vs => {
    console.log(`  pres=[${vs[1].map(e=>`[${e.join(',')}]`).join(', ')}]`);
    console.log(`  total=${vs[0]}, re=${canFinish(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
