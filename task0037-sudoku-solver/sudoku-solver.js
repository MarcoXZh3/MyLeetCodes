/**
 * @param {character[][]}   board   the 9x9 sudoku board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {

};


/**
 * get a printable sudoku board
 * @param {character[][]}   board   the 9x9 sudoku board
 * @returns {string[]}              the printable sudoku board string list
 */
const print = function(board) {
  const line = '+---------+---------+---------+';
  const lines = [];
  board.forEach( (r, i) => {
    if (i % 3 === 0) {
      lines.push(line);
    }
    let str = '';
    r.forEach( (c, j) => {
      if (j % 3 === 0) {
        str += '|';
      }
      str += ` ${c==='.'?' ':c} `;
    });
    lines.push(str + '|');
  });
  lines.push(line);
  return lines;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0037 - Sudoku Solver:');
  [
    [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ],
    [
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ],
    [
      ['.', '9', '.', '.', '4', '.', '.', '.', '.'],
      ['1', '.', '.', '.', '.', '.', '6', '.', '.'],
      ['.', '.', '3', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
      ['3', '.', '.', '.', '5', '.', '.', '.', '.'],
      ['.', '.', '7', '.', '.', '4', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '7', '.', '.', '.', '.'],
    ],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    solveSudoku(vs);
    const lines0 = print(vs);
    const lines = print(bk).map( (line,i)=>`${line}    ${lines0[i]}`);
    console.log(lines.join('\n'));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
