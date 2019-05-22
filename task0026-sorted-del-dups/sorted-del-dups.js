/**
 * @param {number[]}    nums    the sorted array of numbers
 * @return {number}             the length of the non-duplicated array
 */
const removeDuplicates = function(nums) {
  // empty list
  if (nums.length === 0) {
    return 0;
  }

  // preserve the index of the element next to the non-dup part
  let tail = 1;   // the first element is nevery duplicated
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) {  // if current is duplicated with previous one,
      continue ;                  // don't do anything
    }
    nums[tail++] = nums[i];       // if not, move it to and expand tail
  }
  return tail;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0026 - Remove Duplicates from Sorted Array:');
  [
    [1],
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
  ].forEach( vs => {
    console.log(`  list=[${vs}]`);
    const length = removeDuplicates(vs);
    console.log(`  new=[${vs.slice(0, length)}], n=${length}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
