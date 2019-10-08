/**
 * there will be DxD blocks and each block is DxD;
 * the available values will be [1, 2, 3, ... DxD]
 */
const DIMENSION = 3;


/**
 * @param {character[][]}   board   the 9x9 sudoku board
 * @return {boolean}                wether the board is valid or not
 */
const isValidSudoku = function(board) {
  for (let i = 0; i < DIMENSION * DIMENSION; i++) {
    // check this row
    let re = {};
    for (let j = 0; j < DIMENSION * DIMENSION; j++) {
      const k = board[i][j];
      if (re[k]) {
        return false;
      } else if (k !== '.') {
        re[k] = true;
      }
    }

    // check this column
    re = {};
    for (let j = 0; j < DIMENSION * DIMENSION; j++) {
      const k = board[j][i];
      if (re[k]) {
        return false;
      } else if (k !== '.') {
        re[k] = true;
      }
    }

    // check this DxD block: left to right and top to bottom
    re = {};
    const iLeftTop = Math.floor(i / DIMENSION) * DIMENSION;
    const jLeftTop = (i % DIMENSION) * DIMENSION;
    for (let j = 0; j < DIMENSION * DIMENSION; j++) {
      const offsetX = Math.floor(j / DIMENSION);
      const offsetY = j % DIMENSION;
      const k = board[iLeftTop + offsetY][jLeftTop + offsetX];
      if (re[k]) {
        return false;
      } else if (k !== '.') {
        re[k] = true;
      }
    }
  }
  return true;
};


/**
 * get a printable sudoku board
 * @param {character[][]}   board   the 9x9 sudoku board
 * @returns {string}                the printable sudoku board string
 */
const print = function(board) {
  const cellWidth = `${DIMENSION * DIMENSION}`.length + 2;
  let line = '';
  for (let i = 0; i < DIMENSION; i++) {
    line += '+' + [...Array(DIMENSION * cellWidth)].map(_=>'-').join('');
  }
  line += '+';
  const lines = [];
  board.forEach( (r, i) => {
    if (i % DIMENSION === 0) {
      lines.push(line);
    }
    let str = '';
    r.forEach( (c, j) => {
      if (j % DIMENSION === 0) {
        str += '|';
      }
      let cell = `${c}`;
      let prepend = true;
      while (cell.length < cellWidth) {
        cell = prepend ? ' ' + cell : cell + ' ';
        prepend = !prepend;
      }
      str += cell;
    });
    lines.push(str + '|');
  });
  lines.push(line);
  return lines.join('\n');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0036 - Valid Sudoku:');
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
    console.log(print(vs));
    console.log(`valid=${isValidSudoku(vs)}\n`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
