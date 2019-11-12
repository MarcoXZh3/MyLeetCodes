/**
 * @param {number}          numCourses      total number of courses
 * @param {number[][]}      prerequisites   course prerequisites
 * @return {boolean}                        whether possible to finish all
 * @return {number[]}                       the order of taking courses
 */
const findOrder = function(numCourses, prerequisites) {
  if (numCourses === 0) {
    return [];
  }
  const inDegree = Array(numCourses).fill(0);
  const res = Array(numCourses).fill(0);
  let idx = 0;
  for (let pre of prerequisites) {
    inDegree[pre[0]] ++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      res[idx ++] = i;
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const course = queue.shift();
    for (let pre of prerequisites) {
      if (course !== pre[1]) {
        continue ;
      }
      inDegree[pre[0]] --;
      if (inDegree[pre[0]] === 0) {
        res[idx ++] = pre[0];
        queue.push(pre[0]);
      }
    }
  }
  return idx === numCourses ? res : [];
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
