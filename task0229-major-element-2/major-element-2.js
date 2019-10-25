/**
 * hash map
 * @param {number[]}    nums    the number array
 * @return {number[]}           the majority elements
 */
const majorityElement0 = function(nums) {
  const limit = Math.floor(nums.length / 3);
  const map = {};
  const res = new Set();
  for (let num of nums) {
    map[`${num}`] = map[`${num}`] || 0;
    map[`${num}`] ++;
    if (map[`${num}`] > limit) {
      res.add(num);
    }
  }
  return [...res];
};


/**
 * Boyer–Moore majority vote algorithm
 * @see: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
 * @param {number[]}    nums    the number array
 * @return {number[]}           the majority elements
 */
const majorityElement = function(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }
  let cnt1 = 0;   // cy
  let cnt2 = 0;   // cz
  let c1 = 0;     // y
  let c2 = 1;     // z
  for (let num of nums) {   // x
    if (num === c1) {
      cnt1 ++;
    } else if (num === c2) {
      cnt2 ++;
    } else if (!cnt1) {
      c1 = num;
      cnt1 = 1;
    } else if (!cnt2) {
      c2 = num;
      cnt2 = 1;
    } else {
      cnt1 --;
      cnt2 --;
    }
  }
  cnt1 = 0;
  cnt2 = 0;
  for (let num of nums) {
    if (num === c1) {
      cnt1 ++;
    } else if (num === c2) {
      cnt2 ++;
    }
  }

  const limit = Math.floor(nums.length / 3);
  const res = [];
  if (cnt1 > limit) {
    res.push(c1);
  }
  if (cnt2 > limit) {
    res.push(c2);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0229 - Majority Element II:');
  [
    [3,2,3],
    [1, 1, 1, 3, 3, 2, 2, 2],
  ].forEach( vs => {
    console.log(`  targets=[${majorityElement(vs).join(', ')}], nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
