/**
 * universal version of solution in Task 26
 * @param {number[]}  nums    the original number array
 * @return {number}           the length of the array without duplications
 */
const removeDuplicates0 = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  /**
   * check if nums valid before the given index (inclusive) when allow
   * the given number of duplication
   * @param {number[]}  nums  the number array to check
   * @param {number}    idx   the last index to consider
   * @param {number}    cnt   how many of the same number is allowed
   */
  const valid = (nums, idx, cnt) => {
    // the number at the given index itself counts 1
    cnt --;
    while (true) {
      // valid if no the previous number available, or it's not duplicated
      if (idx - 1 < 0 || nums[idx] !== nums[idx - 1]) {
        return true;
      }
      // invalid if number of duplications exceeds the limitation
      if (--cnt < 0) {
        return false;
      }
      idx --;
    }
  };

  const dup = 2;
  // preserve the index of the element next to the valid sub-array
  let tail = 1;     // the first element is never invalid
  for (let i = 1; i < nums.length; i++) {
    // try move the current element but back up the original
    const tmp = nums[tail];
    nums[tail] = nums[i];
    // if still valid after move, keep it and move tail
    if (valid(nums, tail, dup)) {
      tail ++;
    } else {  // otherwise restore the number while hold the tail
      nums[tail] = tmp;
    }
  }
  return tail;
};


/**
 * @param {number[]}  nums    the original number array
 * @return {number}           the length of the array without duplications
 */
const removeDuplicates = function(nums) {
  const dup = 2;
  let tail = 0;
  for (let num of nums) {
    if (tail < dup || num > nums[tail - dup]) {
      nums[tail ++] = num;
    }
  }
  return tail;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0080 - Remove Duplicates from Sorted Array II:');
  [
    [1, 1, 1, 2, 2, 3],
    [0, 0, 1, 1, 1, 1, 2, 3, 3],
  ].forEach( vs => {
    const bk = JSON.parse(JSON.stringify(vs));
    const length = removeDuplicates(vs);
    console.log(`  nums=[${bk.join(', ')}]; removed=(${length})[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
