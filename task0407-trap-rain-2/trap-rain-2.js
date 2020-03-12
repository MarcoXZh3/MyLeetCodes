const path = require('path');
const { PriorityQueue } = require(path.resolve('_utils/priority-queue'));


/**
 * @param {number[][]}  heightMap the height list
 * @return {number}               the rain water these height can trap
 */
const trapRainWater = function(heightMap) {
  const dirs = [ [1, 0], [-1, 0], [0, 1], [0, -1] ];
  const m = heightMap.length;
  const n = m === 0 ? 0 : heightMap[0].length;
  let res = 0;
  const pq = new PriorityQueue(true, null, (a,b)=>a[2]-b[2] );
  const visited = [...Array(m).keys()].map( _=>[...Array(n).keys()].map( _=>false ) );
  for (let i = 0; i < m; i++) {
    pq.enqueue([i, 0, heightMap[i][0]]);
    visited[i][0] = true;
    pq.enqueue([i, n - 1, heightMap[i][n - 1]]);
    visited[i][n - 1] = true;
  }
  for (let j = 1; j < n - 1; j++) {
    pq.enqueue([0, j, heightMap[0][j]]);
    visited[0][j] = true;
    pq.enqueue([m - 1, j, heightMap[m - 1][j]]);
    visited[m - 1][j] = true;
  }
  while (pq.size() > 0) {
    const cur = pq.dequeue();
    for (let dir of dirs) {
      let i = cur[0] + dir[0];
      let j = cur[1] + dir[1];
      if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
        continue ;
      }
      res += Math.max(0, cur[2] - heightMap[i][j]);
      pq.enqueue([i, j, Math.max(heightMap[i][j], cur[2])]);
      visited[i][j] = true;
    }
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0407 - Trapping Rain Water II:');
  [
    [
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(' ')}]`);
    }
    console.log(`  trap=${trapRainWater(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
