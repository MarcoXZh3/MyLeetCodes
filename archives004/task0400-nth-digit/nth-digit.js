/**
 * @param {number}      n   the target digit to fetch
 * @return {number}         the nth digit
 */
const findNthDigit = function(n) {
  let len = 1;
  let cnt = 9;
  let start = 1;
  while (n > len * cnt) {
    n -= len * cnt;
    len ++;
    cnt *= 10;
    start *= 10;
  }
  return parseInt(`${start + Math.floor((n - 1) / len)}`.charAt((n - 1) % len), 10);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0400 - Nth Digit:');
  [
    3,
    11,
  ].forEach( v => {
    console.log(`  n=${v}, digit=${findNthDigit(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
