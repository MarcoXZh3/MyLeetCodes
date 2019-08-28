/**
 * recursion
 * @param {number}    n     height of the stair case
 * @return {number}         number of ways to climb to top
 */
const recursion = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return recursion(n - 1) +                   // climb 1 stair
           (n - 2 >= 0 ? recursion(n - 2) : 0); // climb 2 stairs if available
  }
};


/**
 * dynamic programming
 * @param {number}    n     height of the stair case
 * @return {number}         number of ways to climb to top
 */
const dynamicPrograming = function(n) {
  const dp = Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};


/**
 * from the dynamic programming we can find the result if the fibonacci number
 * @param {number}    n     height of the stair case
 * @return {number}         number of ways to climb to top
 */
const fibonacci = function(n) {
  let a = 1;    // if no stairs: there is only 1 solution
  let b = 1;    // if 1 stair: there is only 1 solution
  if (n === 1) {
    return a;
  }
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};


/**
 * @param {number}    n     height of the stair case
 * @return {number}         number of ways to climb to top
 */
const climbStairs = function(n) {
  // return recursion(n);
  // return dynamicPrograming(n);
  return fibonacci(n);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0070 - Climbing Stairs:');
  [
    2,
    3,
    45,
  ].forEach( v => {
    console.log(`  n=${v}, sols=${climbStairs(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
