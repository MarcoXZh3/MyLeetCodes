/**
 * @param {number}    n   upper bound of the range
 * @return {number}       how many primes within the range
 */
const countPrimes = function(n) {

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
    console.log(`  n=${v}, happy=${countPrimes(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
