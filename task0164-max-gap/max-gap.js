/**
 * @param {number[]}  nums    the number list
 * @return {number}           the max gap between adjacent numbers in sorted
 */
const maximumGap = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0164 - Maximum Gap:');
  [
    [3, 6, 9, 1],
    [10],
  ].forEach( vs => {
    console.log(`  maxGap=${maximumGap(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
