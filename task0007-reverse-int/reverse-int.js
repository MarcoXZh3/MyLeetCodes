/**
 * reverse directly: done as a string
 * @param {number}    x     the original 32-bit signed integer
 * @return {number}         the reversed 32-bit signed integer
 */
const reverse1 = function(x) {
  const rev = parseInt(`${Math.abs(x)}`.split('').reverse().join(''), 10)
                * (x > 0 ? 1 : -1);
  const two31 = Math.pow(2, 31);
  return rev < -two31 || rev > two31 - 1 ? 0 : rev;
};


/**
 * reverse mathematically
 * @param {number}    x     the original 32-bit signed integer
 * @return {number}         the reversed 32-bit signed integer
 */
const reverse = function(x) {
  const two31 = Math.pow(2, 31);
  let sign = x > 0 ? 1 : -1;
  x = Math.abs(x);
  let rev = 0;
  while (x !== 0) {
    rev = rev * 10 + (x % 10);
    if (rev < -two31 || rev > two31 - 1) {
      return 0;
    }
    x = Math.floor(Math.abs(x) / 10);
  }
  return sign * rev;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0007 - Reverse Integer:');
  [
    123,
    -123,
    120,
    1534236469,
  ].forEach( x => {
    console.log(`  x=${x}, r=${reverse(x)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
