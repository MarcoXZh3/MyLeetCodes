/**
 * @param {number}        n   number of bits for the gray code
 * @return {number[]}         the gray code sequence
 */
const grayCode = function(n) {
  return [0];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0089 - Gray Code:');
  [
    2,
    0,
    3,
    4,
  ].forEach( v => {
    console.log(`  n=${v}, codes=[${grayCode(v).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
