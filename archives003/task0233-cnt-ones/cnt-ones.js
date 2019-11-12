/**
 * @param {number}      n     the max number
 * @return {number}           how many 1s are there
 */
const countDigitOne0 = function(n) {
  if (n <= 0) {
    return 0;
  }
  let re = 0;
  for (let i = 0, base = 1; i < `${n}`.length; i++, base *= 10) {
    const d = Math.floor(n / base) % 10;
    let cnt = Math.floor(n / base / 10) * base;
    if (d === 1) {
      cnt += n % base + 1;
    } else if (d > 1) {
      cnt += base;
    }
    re += cnt;
  }
  return re;
};


/**
 * @param {number}      n     the max number
 * @return {number}           how many 1s are there
 */
const countDigitOne = function(n) {
  let re = 0;
  for (let base = 1; base <= n; base *= 10) {
    const higher = Math.floor(n / base);
    let lower = n % base;
    re += Math.floor((higher + 8) / 10) * base +
          (higher % 10 === 1 ? lower + 1 : 0);
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0233 - Number of Digit One:');
  [
    13,
    20,
    101,
    110,
  ].forEach( v => {
    console.log(`  num=${v}; 1s=${countDigitOne(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
