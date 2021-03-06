/**
 * @param {number[][]}  matrix    the matrix of the image
 * @param {boolean}     ccw       true to counter-clockwise; false to clockwise
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix, ccw) {
  let length = matrix.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    for (let j = i; j < length - i - 1; j++) {
      const n0 = matrix[i][j];
      let cnt = 0;
      while (cnt ++ < 4) {
        if (ccw) {      // counter-clockwise
          matrix[i][j] = cnt === 4 ? n0 : matrix[j][length - 1 - i];
          const tmp = i;
          i = j;
          j = length - 1 - tmp;
        } else {        // clockwise
          matrix[i][j] = cnt === 4 ? n0 : matrix[length - 1 - j][i];
          const tmp = j;
          j = i;
          i = length - 1 - tmp;
        }
      }
    }
  }
};


/**
 * print the two images
 * @param {number[][]}  matrix1   the matrix of the 1st image
 * @param {number[][]}  matrix2   the matrix of the 2nd image
 */
const print = function(vs1, vs2) {
  let max1 = Number.MIN_SAFE_INTEGER;
  for (let row of vs1) {
    for (let v of row) {
      if (v > max1) {
        max1 = v;
      }
    }
  }
  max1 = `${max1}`.length;
  let max2 = Number.MIN_SAFE_INTEGER;
  for (let row of vs2) {
    for (let v of row) {
      if (v > max2) {
        max2 = v;
      }
    }
  }
  max2 = `${max2}`.length;
  const strs = [];
  for (let i = 0; i < vs1.length; i++) {
    let str = '  [';
    str += vs1[i].map( v=> {
      let s = `${v}`;
      while (s.length < max1) {
        s = ' ' + s;
      }
      return s;
    }).join(', ');
    str += ']\t[';
    str += vs2[i].map( v=> {
      let s = `${v}`;
      while (s.length < max1) {
        s = ' ' + s;
      }
      return s;
    }).join(', ');
    strs.push(str + ']');
  }
  return strs.join('\n');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0048 - Rotate Image:');
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [ 5,  1,  9, 11],
      [ 2,  4,  8, 10],
      [13,  3,  6,  7],
      [15, 14, 12, 16],
    ],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    rotate(vs);
    console.log(`${print(bk, vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
