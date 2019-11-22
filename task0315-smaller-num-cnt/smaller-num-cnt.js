/**
 * @param {number[]}    nums    the integer array
 * @return {number[]}           the count array
 */
const countSmaller = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0315 - Count of Smaller Numbers After Self:');
  [
    [5, 2, 6, 1],
  ].forEach( vs => {
    console.log(`  nums=${JSON.stringify(vs)}; cnt=${JSON.stringify(countSmaller(vs))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
