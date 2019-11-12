/**
 * BFS
 * @param {number}          numCourses      total number of courses
 * @param {number[][]}      prerequisites   course prerequisites
 * @return {boolean}                        whether possible to finish all
 */
const canFinish0 = function(numCourses, prerequisites) {
  const matrix = [...Array(numCourses).keys()].map(_=>[...Array(numCourses).keys()].map(_=>0));
  const inDegree = [...Array(numCourses).keys()].map(_=>0);
  for (let pre of prerequisites) {
    if (matrix[pre[1]][pre[0]] === 0) {
      inDegree[pre[0]] ++;
    }
    matrix[pre[1]][pre[0]] = 1;
  }

  let count = 0;
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length > 0) {
    const course = queue.shift();
    count ++;
    for (let i = 0; i < numCourses; i++) {
      if (matrix[course][i] !== 0) {
        if (-- inDegree[i] === 0) {
          queue.push(i);
        }
      }
    }
  }
  return count === numCourses;
};


/**
 * DFS
 * @param {number}          numCourses      total number of courses
 * @param {number[][]}      prerequisites   course prerequisites
 * @return {boolean}                        whether possible to finish all
 */
const canFinish = function(numCourses, prerequisites) {
  const dfs = (i) => {
    if (visit[i] === -1) {
      return false;
    } else if (visit[i] === 1) {
      return true;
    }
    visit[i] = -1;
    for (let j of graph[i]) {
      if (!dfs(j)) {
        return false;
      }
    }
    visit[i] = 1;
    return true;
  };

  const graph = [...Array(numCourses).keys()].map( _=>[] );
  const visit = [...Array(numCourses).keys()].map( _=>0 );
  for (let pre of prerequisites) {
    graph[pre[0]].push(pre[1]);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;
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
    [3, [[1, 0], [0, 2], [2, 1]]],
    [4, [[0, 1], [3, 1], [1, 3], [3, 2]]],
  ].forEach( vs => {
    console.log(`  pres=[${vs[1].map(e=>`[${e.join(',')}]`).join(', ')}]`);
    console.log(`  total=${vs[0]}, re=${canFinish(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
