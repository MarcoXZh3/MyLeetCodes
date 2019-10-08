/**
 * depth first search to fill in the queens
 * @param {number}      idx     the starting index for backtracking
 * @param {number}      n       dimension of the board
 * @param {number[]}    cur     current solution of queen positions (0 to n*n)
 * @param {number[][]}  res     all solutions
 */
const dfs = function(idx, n, cur, res) {
  // when all queens placed, a new solution is found
  if (cur.length === n) {
    res.push(JSON.parse(JSON.stringify(cur)));
    return ;
  }

  // all positions available to this queen
  for (let i = idx; i < n * n; i++) {
    const pos = { x: Math.floor(i / n), y: i % n };
    let valid = true;
    for (let p of cur) {
      if (p.x === pos.x ||                  // in the same row
          p.y === pos.y ||                  // in the same column
          p.x + p.y === pos.x + pos.y ||    // in the same "slash"
          p.x - p.y === pos.x - pos.y) {    // in the same "backslash"
        valid = false;
        break ;
      }
    }
    if (!valid) {
      continue ;
    }
    // a valid position -- try it
    cur.push(pos);
    dfs(i + 1, n, cur, res);
    // try next
    cur.pop();
  }
};


/**
 * @param {number}        n   dimension of the board
 * @return {string[][]}       all solutions to the problems
 */
const totalNQueens = function(n) {
  // find all solutions by backtracking
  const res = [];
  dfs(0, n, [], res);
  return res.length;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0052 - N-Queens II:');
  [
    4,
  ].forEach( v => {
    console.log(`  n=${v}; ans=${totalNQueens(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
