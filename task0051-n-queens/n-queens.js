/**
 * @param {number}        n   dimension of the board
 * @return {string[][]}       all solutions to the problems
 */
const solveNQueens = function(n) {
  return [];
};


/**
 * print the answers to console
 * @param {string[][]}    ans   a list of n-queens solutions
 */
const print = function(ans) {
  const printRow = (ans, idx, n) => {
    let str = '  ';
    for (let i = 0; i < ans.length; i++) {
      if (idx < 0 || idx === n) {
        str += '+-' + Array(n).fill('-').join('-') + '-+  ';
      } else {
        str += '| ' + ans[i][idx].split('').join(' ') + ' |  ';
      }
    }
    console.log(str);
  };

  // print the board
  if (!ans || ans.length === 0) {
    return ;
  }
  const n = ans[0].length;
  for (let i = -1; i <= n; i++) {
    printRow(ans, i, n);
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0051 - N-Queens:');
  [
    4,
  ].forEach( v => {
    console.log(`  n=${v}`);
    print(solveNQueens(v));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
