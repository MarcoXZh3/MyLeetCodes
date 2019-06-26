/**
 * @param {character[][]}   board   the 9x9 sudoku board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    // check this row
    let re = {};
    for (let j = 0; j < 9; j++) {
      const k = board[i][j];
      if (re[k]) {
        return false;
      } else if (k !== '.') {
        re[k] = true;
      }
    }

    // check this column
    re = {};
    for (let j = 0; j < 9; j++) {
      const k = board[j][i];
      if (re[k]) {
        return false;
      } else if (k !== '.') {
        re[k] = true;
      }
    }

    // check this 3x3 block: left to right and top to bottom
    re = {};
    const iLeftTop = (i % 3) * 3;
    const jLeftTop = Math.floor(i / 3) * 3;
    for (let j = 0; j < 9; j++) {
      const offsetX = j % 3;
      const offsetY = Math.floor(j / 3);
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
