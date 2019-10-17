/**
 * @param {number[]}    nums    cashes in houses as a circle
 * @return {number}             max amount to grab
 */
const rob = function(nums) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0213 - House Robber II:');
  [
    [2, 3, 2],
    [1, 2, 3, 1],
  ].forEach( vs => {
    console.log(`  max=${rob(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
