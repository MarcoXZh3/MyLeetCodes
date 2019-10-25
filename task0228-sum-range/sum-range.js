/**
 * @param {number[]}    nums      the number array
 * @return {string[]}             summary descriptions of the array
 */
const summaryRanges = function(nums) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0228 - Summary Ranges:');
  [
    [0, 1, 2, 4, 5, 7],
    [0, 2, 3, 4, 6, 8, 9],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}]; summary=[${summaryRanges(vs).map(x=>`"${x}"`).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
