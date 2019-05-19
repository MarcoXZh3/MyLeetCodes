/**
 * @param {number[]}      nums      the list of numbers
 * @return {number[][]}             all possible solutions
 */
const threeSum = function(nums) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0015 - 3 Sum:');
  [
    [-1, 0, 1, 2, -1, -4],
  ].forEach( vs => {
    const res = threeSum(vs);
    console.log(`  source=[${vs.join(', ')}]`);
    console.log(`  res=[ ${res.map(x=>`[${x.join(', ')}]`).join(', ')} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
