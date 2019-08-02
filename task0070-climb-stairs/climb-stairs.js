/**
 * @param {number}    n     height of the stair case
 * @return {number}         number of ways to climb to top
 */
const climbStairs = function(n) {

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
  ].forEach( v => {
    console.log(`  n=${v}, sols=${climbStairs(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
