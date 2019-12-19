/**
 * brutal force
 * @param {number[]}      A     the number array
 * @return {number}             max return value of all rotate functions
 */
const maxRotateFunction0 = function(A) {
  if (A.length === 0) {
    return 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < A.length; i++) {
    let re = 0;
    for (let j = 0; j < A.length; j++) {
      re += j * A[j];
    }
    max = Math.max(max, re);
    A.unshift(A.pop());
  }
  return max;
};


/**
 * @param {number[]}      A     the number array
 * @return {number}             max return value of all rotate functions
 */
const maxRotateFunction = function(A) {
  let all = 0;
  let len = A.length;
  let f = 0;
  for (let i = 0; i < len; i++) {
    f += i * A[i];
    all += A[i];
  }
  let max = f;
  for (let i = len - 1; i >= 1; i--) {
    f = f + all - len * A[i];
    max = Math.max(max, f);
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0396 - Rotate Function:');
  [
    [4, 3, 2, 6],
  ].forEach( vs => {
    console.log(`  max=${maxRotateFunction(vs)}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
