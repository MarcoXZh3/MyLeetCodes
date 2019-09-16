/**
 * @param {number[]}    ratings   ratings of each child
 * @return {number}               how many candies are required
 */
const candy = function(ratings) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0135 - Candy:');
  [
    [1, 0, 2],
    [1, 2, 2],
    [1, 3, 2, 2, 1],
  ].forEach( vs => {
    console.log(`  min=${candy(vs)}, ratings=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
