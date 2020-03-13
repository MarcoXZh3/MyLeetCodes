/**
 * @param {number[]}    nums    the number array
 * @return {boolean}            whether can be split equally or not
 */
const canPartition = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0416 - Partition Equal Subset Sum:');
  [
    [1, 5, 11, 5],
    [1, 2, 3, 5],
  ].forEach( vs => {
    console.log(`  canPartition=${canPartition(vs)}, arr=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
