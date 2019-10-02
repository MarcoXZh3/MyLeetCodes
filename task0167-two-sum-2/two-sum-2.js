/**
 * hash map based linear search
 * @param {number[]}    numbers   the sorted number array
 * @param {number}      target    the target sum
 * @return {number[]}             (1-based) indexes of the target values
 */
const twoSum0 = function(numbers, target) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = target - numbers[i];
    if (map[`${num}`] >= 0) {
      return [map[`${num}`] + 1, i + 1];
    }
    map[`${numbers[i]}`] = i;
  }
  return [];
};


/**
 * two pointer based linear search
 * @param {number[]}    numbers   the sorted number array
 * @param {number}      target    the target sum
 * @return {number[]}             (1-based) indexes of the target values
 */
const twoSum1 = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum < target) {
      l ++;
    } else if (sum > target) {
      r --;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [];
};


/**
 * binary search the 2nd number when 1st number given
 * @param {number[]}    numbers   the sorted number array
 * @param {number}      target    the target sum
 * @return {number[]}             (1-based) indexes of the target values
 */
const twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let l = i + 1;
    let r = numbers.length - 1;
    const num = target - numbers[i];
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (numbers[m] < num) {
        l = m + 1;
      } else if (numbers[m] > num) {
        r = m - 1;
      } else {
        return [i + 1, m + 1];
      }
    }
  }
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0167 - Two Sum II - Input array is sorted:');
  [
    [[2, 7, 11, 15], 9],
  ].forEach( vs => {
    console.log(`  sum=${vs[1]}, idxs=[${twoSum(vs[0], vs[1]).join(', ')}], nums=[${vs[0].join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
