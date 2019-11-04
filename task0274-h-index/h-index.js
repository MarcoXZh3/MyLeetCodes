/**
 * @param {number[]}    citations     the number of citations
 * @return {number}                   the h index
 */
const hIndex = function(citations) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0274 - H-Index:');
  [
    [3, 0, 6, 1, 5],
  ].forEach( vs => {
    console.log(`  h=${hIndex(vs)}, cites=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
