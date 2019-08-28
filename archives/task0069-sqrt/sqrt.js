/**
 * brutal force: try every integer
 * @param {number}    x   the number for square root
 * @return {number}       the truncated integer of square root of x
 */
const mySqrt0 = function(x) {
  for (let i = 0; i <= x; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
};


/**
 * Newton's method: https://en.wikipedia.org/wiki/Newton%27s_method
 * @param {number}    x   the number for square root
 * @return {number}       the truncated integer of square root of x
 */
const mySqrt1 = function(x) {
  let r = x;
  while (r * r > x)
      r = Math.floor((r + x / r) / 2);
  return r;
};


/**
 * binary search
 * @param {number}    x   the number for square root
 * @return {number}       the truncated integer of square root of x
 */
const mySqrt = function(x) {
  let a = 0;
  let b = x;
  while (true) {
    let c = Math.floor((a + b) / 2);
    if (c * c <= x) {
      if ((c + 1) * (c + 1) > x) {
        return c;
      }
      a = c + 1;
    } else {
      b = c - 1;
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0069 - sqrt(x):');
  [
    0,
    1,
    4,
    8,
  ].forEach( v => {
    console.log(`  (int) sqrt(${v})=${mySqrt(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
