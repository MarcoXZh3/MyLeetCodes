/**
 * @param {number}        n     size of the matrix
 * @return {number[][]}         the spiral matrix
 */
const generateMatrix = function(n) {
  const res = [...Array(n).keys()].map( _=>[...Array(n).keys()].map( _=>0 ) );
  const visited = [...Array(n).keys()].map( _=>[...Array(n).keys()].map( _=>false ) );
  const xDir = [0, 1, 0, -1];
  const yDir = [1, 0, -1, 0];
  let dir = 0;
  let x = 0;
  let y = 0;
  res[x][y] = 1;
  visited[x][y] = true;
  for (let i = 2; i <= n * n; i++) {
    const xNext = x + xDir[dir];
    const yNext = y + yDir[dir];
    if (xNext >= 0 && xNext < n &&
        yNext >= 0 && yNext < n &&
        !visited[xNext][yNext]) {
      x = xNext;
      y = yNext;
    } else {
      dir = (dir + 1) % 4;
      x = x + xDir[dir];
      y = y + yDir[dir];
    }
    res[x][y] = i;
    visited[x][y] = true;
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0059 - Spiral Matrix II:');
  [
    3,
  ].forEach( n => {
    console.log(` n=${n}`);
    for (let row of generateMatrix(n)) {
      console.log(`  [${row.join(', ')}],`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
