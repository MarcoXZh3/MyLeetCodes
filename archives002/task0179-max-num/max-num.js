/**
 * @param {number[]}    nums    the number array
 * @return {string}             the largest number as a string
 */
const largestNumber = function(nums) {
  nums = nums.map( x=>`${x}` ).sort( (a,b)=>`${a}${b}`>`${b}${a}`?-1:1 );
  return nums[0] === '0' ? '0' : nums.join('');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0179 - Largest Number:');
  [
    [10, 2],
    [3, 30, 34, 5, 9],
    [0 ,0],
  ].forEach( vs => {
    console.log(`  largest=${largestNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
