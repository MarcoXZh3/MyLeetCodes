/**
 * @param {number}      n         the nth super ugly number
 * @param {number[]}    primes    the prime list
 * @return {number}               the target number
 */
const nthSuperUglyNumber = function(n, primes) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0313 - Super Ugly Number:');
  [
    [12, [2, 7, 13, 19]],
  ].forEach( vs => {
    console.log(`  num=${nthSuperUglyNumber(vs[0], vs[1])}; n=${vs[0]}; primes=${JSON.stringify(vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
