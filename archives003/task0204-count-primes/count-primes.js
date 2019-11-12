/**
 * count primes one by one
 * @param {number}    n   upper bound of the range
 * @return {number}       how many primes within the range
 */
const countPrimes0 = function(n) {
  let re = 1;   // skip number 2, but count it as a prime
  for (let i = 3; i < n; i += 2) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prime = false;
        break ;
      }
    }
    if (prime) {
      re ++;
    }
  }
  return n <= 2 ? 0 : re;
};


/**
 * count primes one by one; when found one, all its multiples are no longer primes
 * @param {number}    n   upper bound of the range
 * @return {number}       how many primes within the range
 */
const countPrimes = function(n) {
  let re = 0;
  const nonPrimes = new Set();
  for (let i = 2; i < n; i++) {
    if (nonPrimes.has(i)) {
      continue ;
    }
    re ++;
    for (let j = 2; i * j < n; j++) {
      nonPrimes.add(i * j);
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0204 - Count Primes:');
  [
    10,
  ].forEach( v => {
    console.log(`  n=${v}, count=${countPrimes(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
