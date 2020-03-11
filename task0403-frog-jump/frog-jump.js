/**
 * dynamic programming
 * @param {number[]}    stones    distances of each stone
 * @return {boolean}              whether the frog can jump over or not
 */
const canCross1 = function(stones) {
  const length = stones.length;
  const dp = [...Array(length).keys()].map( _=>[...Array(length + 1).keys()].map( _=>false ) );
  dp[0][1] = true;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      let dist = stones[i] - stones[j];
      if (dist < 0 || dist > length || !dp[j][dist]) {
        continue ;
      }
      dp[i][dist] = true;
      if (dist - 1 >= 0) {
        dp[i][dist - 1] = true;
      }
      if (dist + 1 <= length) {
        dp[i][dist + 1] = true;
      }
      if (i === length - 1) {
        return true;
      }
    }
  }
  return false;
};


/**
 * @param {number[]}    stones    distances of each stone
 * @return {boolean}              whether the frog can jump over or not
 */
const canCross = function(stones) {
  const map = { '0': new Set([1]) };
  for (let i = 1; i < stones.length; i++) {
    map[`${stones[i]}`] = new Set();
  }
  for (let i = 0; i < stones.length - 1; i++) {
    for (let step of map[`${stones[i]}`]) {
      const reach = step + stones[i];
      if (reach === stones[stones.length - 1]) {
        return true;
      }
      const set = map[`${reach}`];
      if (set) {
        set.add(step);
        if (step - 1 > 0) {
          set.add(step - 1);
        }
        set.add(step + 1);
      }
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0403 - Frog Jump:');
  [
    [0, 1, 3, 5, 6, 8, 12, 17],
    [0, 1, 2, 3, 4, 8, 9, 11],
    [0, 2],
  ].forEach( vs => {
    console.log(`  cross=${canCross(vs)}, stones=[${vs}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
