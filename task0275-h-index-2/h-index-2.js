/**
 * @param {number[]}    citations     the number of citations, sorted
 * @return {number}                   the h index
 */
const hIndex = function(citations) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0275 - H-Index II:');
  [
    [0, 1, 3, 5, 6],
  ].forEach( vs => {
    console.log(`  h=${hIndex(vs)}, cites=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
