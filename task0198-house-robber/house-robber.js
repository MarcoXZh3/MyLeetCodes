/**
 * @param {number[]}    nums    cashes in houses
 * @return {number}             max amount to grab
 */
const rob = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0198 - House Robber:');
  [
    [1, 2, 3, 1],
    [2, 7, 9, 3, 1],
  ].forEach( vs => {
    console.log(`  max=${rob(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
