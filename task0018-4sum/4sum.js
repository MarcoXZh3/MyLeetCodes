/**
 * @param {number[]}      nums      the list of numbers
 * @param {number}        target    the target of sum
 * @return {number[][]}             all possible solutions
 */
const fourSum = function(nums, target) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0018 - 4 Sum:');
  [
    [[1, 0, -1, 0, -2, 2], 0],
  ].forEach( vs => {
    const res = fourSum(vs);
    console.log(`  target=${vs[1]}, nums=[${vs[0].join(', ')}]`);
    console.log(`  res=[ ${res.map(x=>`[${x.join(', ')}]`).join(', ')} ]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
