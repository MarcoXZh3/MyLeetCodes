/**
 * @param {number}    num   the number to check
 * @return {boolean}        whether an ugly number or not
 */
const isUgly0 = function(num) {
  if (num <= 0) {
    return false;
  } else if (num === 1) {
    return true;
  }
  const primes = [2, 3, 5];
  for (let p of primes) {
    let re = num / p;
    while (re === Math.floor(re)) {
      if (re === 1) {
        return true;
      }
      num = re;
      re = num / p;
    }
  }
  return false;
};


/**
 * @param {number}    num   the number to check
 * @return {boolean}        whether an ugly number or not
 */
const isUgly = function(num) {
  const primes = [2, 3, 5];
  for (let p of primes) {
    while (num && num % p == 0) {
      num /= p;
    }
  }
  return num === 1;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0263 - Ugly Number:');
  [
    1,
    6,
    8,
    14,
  ].forEach( v => {
    console.log(`  num=${v}, ugly=${isUgly(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
