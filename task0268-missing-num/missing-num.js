/**
 * sort and then search
 * @param {number[]}  nums    the number array
 * @return {number}           the missing number
 */
const missingNumber0 = function(nums) {
  nums = nums.sort( (a,b)=>a-b );
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return -1;
};


/**
 * hash set
 * @param {number[]}  nums    the number array
 * @return {number}           the missing number
 */
const missingNumber1 = function(nums) {
  const map = new Set();
  for (let num of nums) {
    map.add(num);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
  return -1;
};


/**
 * bit manipulations
 * @param {number[]}  nums    the number array
 * @return {number}           the missing number
 */
const missingNumber2 = function(nums) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
  }
  return missing;
};


/**
 * by sum of the array
 * @param {number[]}  nums    the number array
 * @return {number}           the missing number
 */
const missingNumber = function(nums) {
  let sum = nums.length * (nums.length + 1) / 2;
  for (let num of nums) {
    sum -= num;
  }
  return sum;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0268 - Missing Number:');
  [
    [3, 0, 1],
    [9, 6, 4, 2, 3, 5, 7, 0, 1],
  ].forEach( vs => {
    console.log(`  missing=${missingNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
