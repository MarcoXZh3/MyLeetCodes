/**
 * identify non-val elements and keep them
 * @param {number[]}    nums    the sorted array of numbers
 * @param {number}      val     the value to be removed
 * @return {number}             the length of the non-duplicated array
 */
const removeElement1 = function(nums, val) {
  // tail: the first element that is not val
  let tail = -1;
  while (++tail < nums.length && nums[tail] !== val) ;

  // starting from tail, move elements that are not val to tail
  for (let i = tail; i < nums.length; i++) {
    // elements equal to neither val nor tail need to be preserved
    if (nums[i] !== val && i !== tail) {
      nums[tail++] = nums[i];
    }
  }
  return tail;
};


/**
 * identify val elements and delete them
 * @param {number[]}    nums    the sorted array of numbers
 * @param {number}      val     the value to be removed
 * @return {number}             the length of the non-duplicated array
 */
const removeElement = function(nums, val) {
  let target = -1;
  while (++target < nums.length && nums[target] !== val) ;
  for (let i = target + 1; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[target++] = nums[i];
    }
  };
  return target;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0027 - Remove Element:');
  [
    [ [3, 2, 2, 3], 3],
    [ [0, 1, 2, 2, 3, 0, 4, 2], 2],
  ].forEach( vs => {
    console.log(`  val=${vs[1]}, list=[${vs[0]}]`);
    const length = removeElement(vs[0], vs[1]);
    console.log(`  n=${length}, new=[${vs[0].slice(0, length)}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
