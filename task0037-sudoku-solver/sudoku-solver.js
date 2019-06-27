/**
 * there will be DxD blocks and each block is DxD;
 * the available values will be [1, 2, 3, ... DxD]
 */
const DIMENSION = 3;


/**
 * The stack definition
 */
const Stack = function() {
  /**
   * the stack data
   */
  this.vals = [];
  /**
   * push a value to the stack
   * @param {object}    x     the object to push
   */
  this.push = (x) => {
    this.vals.unshift(x);
  }
  /**
   * pop a value from the stack
   * @returns {object}        the popped object - undefined if not available
   */
  this.pop = () => {
    return this.vals.shift();
  }
  /**
   * peek the top element
   * @returns {object}        the top object - undefined if not available
   */
  this.peek = () => {
    return this.vals[0];
  }
  /**
   * check if stack is empty
   * @returns {boolean}       whether empty or not
   */
  this.empty = () => {
    return this.vals.length === 0;
  }
};


/**
 * check wether the sudoku board is valid or not
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
 * recursive DFS: fill the cell by given answer
 * @param {character[][]}   board   the 9x9 sudoku board
 * @param {Stack}           answer  the answers with (i, j) and value
 * @returns {boolean}               true if solved; false if not solvable
 */
const fillCell = function(board, answer) {
  const cur = answer.peek();
  const next = { i:null, j:null, val:null };
  // step 1: get indexes of the next cell
  for (next.i = cur.i; next.i < DIMENSION * DIMENSION; next.i++) {
    for (next.j = (next.i === cur.i ? cur.j + 1 : 0);
         next.j < DIMENSION * DIMENSION; next.j++) {
      if (board[next.i][next.j] === '.') {
        next.val = -1;
        break ;
      }
    }
    if (next.val) {
      break ;
    }
  }
  // step 2: try all possible values for the cell
  for (let i = 1; i <= DIMENSION * DIMENSION; i++) {
    next.val = `${i}`;
    board[next.i][next.j] = `${i}`;
    if (!isValidSudoku(board)) {
      board[next.i][next.j] = `.`;
      continue ;
    }
    // found a value for the cell -- is the sudoku solved?
    answer.push(next);
    board[next.i][next.j] = `${next.val}`;
    if (board.every( r=>r.every( c=>c!=='.' ) )) {
      return true;      // solved
    }

    // not yet -- try fill next cell
    const re = fillCell(board, answer);
    if (re) {           // solvable -- take the answer
      return re;
    } else {            // not solvable -- revert the current cell and try again
      answer.pop();
      board[next.i][next.j] = '.';
    }
  }
  // having tried all possible value for the current cell without solution
  return false;
}


/**
 * find a solution for the sudoku
 * @param {character[][]}   board   the 9x9 sudoku board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
  const answer = new Stack();
  answer.push({ i:0, j:-1, val:-1 });
  fillCell(board, answer);
};


/**
 * get a printable sudoku board
 * @param {character[][]}   board   the 9x9 sudoku board
 * @returns {string[]}              the printable sudoku board string in lines
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
      ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
      ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
      ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
      ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
      ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
      ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
      ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
    ],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    solveSudoku(vs);
    const lines0 = print(vs);
    const lines = print(bk).map( (line,i)=>`${line}    ${lines0[i]}`);
    console.log(lines.join('\n'));
    console.log(isValidSudoku(bk), isValidSudoku(vs));
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
