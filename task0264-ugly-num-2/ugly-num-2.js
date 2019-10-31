/**
 * @param {number}      n     the number
 * @return {number}           the target ugly number
 */
const nthUglyNumber = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0264 - Ugly Number II:');
  [
    10,
  ].forEach( v => {
    console.log(`  n=${v}, ugly=${nthUglyNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
