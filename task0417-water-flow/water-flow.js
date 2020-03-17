/**
 * @param {number[][]}    matrix    the water matrix
 * @return {number[][]}             the positions of water flow
 */
const pacificAtlantic = function(matrix) {
  const dfs = (x, y, pre, val) => {
    if (x < 0 || x >= matrix.length ||
        y < 0 || y >= matrix[0].length ||
        matrix[x][y] < pre || (visited[x][y] & val) === val) {
      return ;
    }
    visited[x][y] |= val;
    if (visited[x][y] === 3) {
      res.push([x, y]);
    }
    dfs(x + 1, y, matrix[x][y], visited[x][y]);
    dfs(x - 1, y, matrix[x][y], visited[x][y]);
    dfs(x, y + 1, matrix[x][y], visited[x][y]);
    dfs(x, y - 1, matrix[x][y], visited[x][y]);
  };

  const res = [];
  if (!matrix || matrix.length === 0 || !matrix[0] || matrix[0].length === 0) {
    return res;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const visited = [...Array(m).keys()].map( _=>[...Array(n).keys()].map( _=>false ) );
  for (let i = 0; i < m; i++) {
    dfs(i, 0, Number.MIN_SAFE_INTEGER, 1);
    dfs(i, n - 1, Number.MIN_SAFE_INTEGER, 2);
  }
  for (let i = 0; i < n; i++) {
    dfs(0, i, Number.MIN_SAFE_INTEGER, 1);
    dfs(m - 1, i, Number.MIN_SAFE_INTEGER, 2);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0417 - Pacific Atlantic Water Flow:');
  [
    [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ],
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  pos=${JSON.stringify(pacificAtlantic(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
