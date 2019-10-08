/**
 * brutal force: try every possible solution
 * @param {number[]}  nums    numbers of jumps
 * @return {boolean}          whether could reach end or not
 */
const canJump0 = function(nums) {
  if (nums.length <= 1) {
    return true;
  } else if (nums[0] === 0) {
    return false;
  }
  for (let i = nums[0]; i > 0; i--) {
    if (canJump(nums.slice(i))) {
      return true;
    }
  }
  return false;
};


/**
 * top-down memoization
 * @param {number}    pos     index of the current position
 * @param {number[]}  nums    numbers of jumps
 * @param {number[]}  memo    memoization of the results by index
 * @return {boolean}          whether could reach end or not
 */
const canJumpFromPosition = function(pos, nums, memo) {
  if (memo[pos] !== 0) {
    return memo[pos] === 1;
  }
  for (let i = pos + 1; i <= pos + nums[pos] && i < nums.length; i++) {
    if (canJumpFromPosition(i, nums, memo)) {
      memo[pos] = 1;
      return true;
    }
  }
  memo[pos] = -1;
  return false;
};


/**
 * dynamic programming with memoization - top down
 * @param {number[]}  nums    numbers of jumps
 * @return {boolean}          whether could reach end or not
 */
const canJump1 = function(nums) {
  const memo = Array(nums.length).fill(0);  // 1: reachable; -1: not; 0: unknown
  memo[memo.length - 1] = 1;
  return canJumpFromPosition(0, nums, memo);
};


/**
 * dynamic programming with memoization - bottom up
 * @param {number[]}  nums    numbers of jumps
 * @return {boolean}          whether could reach end or not
 */
const canJump2 = function(nums) {
  const memo = Array(nums.length).fill(0);  // 1: reachable; -1: not; 0: unknown
  memo[memo.length - 1] = 1;

  for (let i = nums.length - 2; i>= 0; i--) {
    for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
      if (memo[j] === 1) {
        memo[i] = 1;
        break ;
      }
    }
  }
  return memo[0] === 1;
};


/**
 * Greedy
 * @param {number[]}  nums    numbers of jumps
 * @return {boolean}          whether could reach end or not
 */
const canJump = function(nums) {
  let last = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }
  return last === 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0055 - Jump Game:');
  [
    [2, 3, 1, 1, 4],
    [3, 2, 1, 0, 4],
    [2, 0, 0],
    [2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6,
     5, 3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5,
     8, 0, 7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7,
     7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8, 2, 2, 7, 5,
     1, 7, 9, 6],
  ].forEach( vs => {
    console.log(`  can=${canJump(vs)}, jumps=[${vs.join(',')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
