/**
 * split into max sub-arithmetic sequences and count each
 * @param {number[]}  A     the original array
 * @return {number}         the number of arithmetic slices
 */
const numberOfArithmeticSlices0 = function(A) {
  /**
   * count how many sub arithmetic slices in an arithmetic sequence
   * @param {number[]}    arithArr    the arithmetic sequence
   * @returns {number}                number of sub arithmetic slices
   */
  const OfArithmeticSeq = (arithArr) => {
    let re = 0;
    for (let i = 3; i <= arithArr.length; i++) {
      re += arithArr.length - i + 1;
    }
    return re;
  };

  // split the entire array into max sub-arithmetic sequences
  const arithArrs = [];
  while (A.length > 2) {
    let idx = 2;
    while (A[idx] - A[idx - 1] === A[1] - A[0]) {
      idx ++;
    }
    if (idx > 2) {
      arithArrs.push(A.slice(0, idx));
    }
    A = A.slice(idx - 1);
  }
  // count each sub sequences
  let res = 0;
  for (let arr of arithArrs) {
    res += OfArithmeticSeq(arr);
  }
  return res;
};


/**
 * recursion
 * @param {number[]}  A     the original array
 * @return {number}         the number of arithmetic slices
 */
const numberOfArithmeticSlices1 = function(A) {
  const recursion = (i) => {
    if (i < 2) {
      return 0;
    }
    let ap = 0;
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      ap = 1+ recursion(i - 1);
      sum += ap;
    } else {
      recursion(i - 1);
    }
    return ap;
  };
  let sum = 0;
  recursion(A.length - 1);
  return sum;
};


/**
 * dynamic programming
 * @param {number[]}  A     the original array
 * @return {number}         the number of arithmetic slices
 */
const numberOfArithmeticSlices2 = function(A) {
  const dp = Array(A.length).fill(0);
  let sum = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = 1 + dp[i - 1];
      sum += dp[i];
    }
  }
  return sum;
};


/**
 * dynamic programming with constant space
 * @param {number[]}  A     the original array
 * @return {number}         the number of arithmetic slices
 */
const numberOfArithmeticSlices3 = function(A) {
  let dp = 0;
  let sum = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp ++;
      sum += dp;
    } else {
      dp = 0;
    }
  }
  return sum;
};


/**
 * by formula
 * @param {number[]}  A     the original array
 * @return {number}         the number of arithmetic slices
 */
const numberOfArithmeticSlices = function(A) {
  let cnt = 0;
  let sum = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      cnt ++;
    } else {
      sum += (cnt + 1) * cnt / 2;
      cnt = 0;
    }
  }
  return sum + (cnt + 1) * cnt / 2;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0413 - Arithmetic Slices:');
  [
    [1, 2, 3, 4],
    [1, 2, 3, 8, 9, 10],
  ].forEach( vs => {
    console.log(`  n=${numberOfArithmeticSlices(vs)}, arr=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
