/**
 * @param {character[][]}   matrix    the matrix to search for rectangles
 * @return {number}                   the area of the max rectangle
 */
const maximalRectangle = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }
  let m = matrix.length;
  let n = matrix[0].length;
  const left = Array(n).fill(0);
  const right = Array(n).fill(n);
  const height = Array(n).fill(0);
  let max = 0;
  for (let i = 0; i < m; i++) {
    let l = 0;
    let r = n;
    for (let j = 0; j < n; j++) {
      height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
    }
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[j] = left[j] > l ? left[j] : l;
      } else {
        left[j] = 0;
        l = j + 1;
      }
    }
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === '1') {
        right[j] = right[j] < r ? right[j] : r;
      } else {
        right[j] = n;
        r = j;
      }
    }
    for (let j = 0; j < n; j++) {
      const area = (right[j] - left[j]) * height[j];
      max = max > area ? max : area;
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0085 - Maximal Rectangle:');
  [
    [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ],
  ].forEach( vs => {
    for (let row of vs) {
      console.log(`  [${row.join(', ')}]`);
    }
    console.log(`  max=${maximalRectangle(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
