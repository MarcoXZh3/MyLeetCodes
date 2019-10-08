/**
 * @param {character[][]}     grid    the 2D array of water/island
 * @return {number}                   number of islands
 */
const numIslands = function(grid) {
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') {
      return ;
    }
    grid[i][j] = '0';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;
  let re = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        re ++;
        dfs(i, j);
      }
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0200 - Number of Islands:');
  [
    [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ],
    [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ],
    [
      ['1', '1', '1'],
      ['0', '1', '0'],
      ['1', '1', '1'],
    ]
  ].forEach( vs => {
    vs.forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  cnt=${numIslands(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
