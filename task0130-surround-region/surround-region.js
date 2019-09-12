/**
 * @param {character[][]}     board     the original board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0130 - Surrounded Regions:');
  [
    [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ],
  ].forEach( vs => {
    const cp = JSON.parse(JSON.stringify(vs));
    solve(vs);
    vs.forEach( (r, i) => {
      let line = i === 0 ? 'Before: ' : '        ';
      line += cp[i].join(' ');
      line += i === 0 ? '  After: ' : '         ';
      line += r.join(' ');
      console.log(line);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
