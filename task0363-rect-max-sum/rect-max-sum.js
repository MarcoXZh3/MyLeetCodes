/**
 * dynamic programming
 * @param {number[][]}    matrix    the number matrix
 * @param {number}        k         the upper bound of sums
 * @return {number}                 the max sum
 */
const maxSumSubmatrix0 = function(matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...Array(m).keys()].map( _=>[...Array(n).keys()].map( _=>0 ) );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let area = matrix[i][j];
      if (i - 1 >= 0) {
        area += dp[i - 1][j];
      }
      if (j - 1 >= 0) {
        area += dp[i][j - 1];
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        area -= dp[i - 1][j - 1];
      }
      dp[i][j] = area;
    }
  }
  let re = Number.MIN_SAFE_INTEGER;
  for (let i1 = 0; i1 < m; i1++) {
    for (let j1 = 0; j1 < n; j1++) {
      for (let i2 = i1; i2 < m; i2++) {
        for (let j2 = j1; j2 < n; j2++) {
          let area = dp[i2][j2];
          if (i1 - 1 >= 0) {
            area -= dp[i1 - 1][j2];
          }
          if (j1 - 1 >= 0) {
            area -= dp[i2][j1 - 1];
          }
          if (i1 - 1 >= 0 && j1 - 1 >= 0) {
            area += dp[i1 - 1][j1 - 1];
          }
          if (area <= k) {
            re = Math.max(re, area);
          }
        }
      }
    }
  }
  return re;
};


/**
 * tree set
 * @param {number[][]}    matrix    the number matrix
 * @param {number}        k         the upper bound of sums
 * @return {number}                 the max sum
 */
const maxSumSubmatrix = function(matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  let re = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const arr = Array(m).fill(0);
      for (let x = 0; x < m; x++) {
        for (let y = i; y < j; y++) {
          arr[x] += matrix[x][y];
        }
      }
      const list = [0];
      let sum = 0;
      for (let x of arr) {
        sum += x;
        const ceiling = list.find( e=>e>=sum-k );
        if (ceiling != null) {
          re = Math.max(re, sum - ceiling);
        }
        let y = 0;
        while (y < list.length && list[y] <= sum) {
          y ++;
        }
        list.splice(y, 0, sum);
      }
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0363 - Max Sum of Rectangle No Larger Than K:');
  [
    [2, [ [1, 0, 1], [0, -2, 3] ] ],
  ].forEach( vs => {
    vs[1].forEach( row => {
      console.log(`  ${row.join(' ')}`);
    });
    console.log(`  k=${vs[0]}, sum=${maxSumSubmatrix(vs[1], vs[0])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
