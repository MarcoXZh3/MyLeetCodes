/**
 * @param {number}      n       the max number
 * @return {number[]}           the lexicographically sorted numbers
 */
const lexicalOrder = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0386 - Lexicographical Numbers:');
  [
    13,
  ].forEach( v => {
    console.log(`  n=${v}, val=${lexicalOrder(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
