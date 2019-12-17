/**
 * @param {number[]}      nums      the number array
 * @return {number}                 the max length of wiggle sequences
 */
const wiggleMaxLength = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0376 - Wiggle Subsequence:');
  [
    [1, 7, 4, 9, 2, 5],
    [1, 17, 5, 10, 13, 15, 10, 5, 16, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ].forEach( vs => {
    console.log(`  max=${wiggleMaxLength(vs)}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
