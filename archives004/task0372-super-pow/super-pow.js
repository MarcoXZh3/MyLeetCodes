/**
 * @param {number}      a   the base number
 * @param {number[]}    b   the digits of the exponent
 * @return {number}         a ^ b % 1337
 */
const superPow0 = function(a, b) {
  const BASE = 1337;
  const pow_mod = (a, k) => {
    a %= BASE;
    let re = 1;
    for (let i = 0; i < k; i++) {
      re = (re * a) % BASE;
    }
    return re;
  };
  const recursion = (a, b) => {
    if (b.length === 0) {
      return 1;
    }
    // let last = b[b.length - 1];
    let last = b.pop();
    return pow_mod(recursion(a, b), 10) * pow_mod(a, last) % BASE;
  };
  return recursion(a, b.slice());
};


/**
 * Euler's theorem
 * @see https://en.wikipedia.org/wiki/Euler%27s_theorem
 * @param {number}      a   the base number
 * @param {number[]}    b   the digits of the exponent
 * @return {number}         a ^ b % 1337
 */
const superPow = function(a, b) {
  const BASE = 1337;    // 1337 = 7 * 191
  const X = 1140;       // 1140 = (7 - 1) * (191 - 1)
  if (a % 1337 === 0) {
    return a;
  }
  let p = 0;
  for (let n of b) {
    p = (p * 10 + n) % X;
  }
  if (p === 0) {
    p += X;
  }
  a %= BASE;
  let re = 1;
  while (p !== 0) {
    if ((p & 1) !== 0) {
      re = re * a % BASE;
    }
    a = a * a % BASE;
    p >>= 1;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0372 - Super Pow:');
  [
    [2, [3] ],
    [2, [1, 0] ],
  ].forEach( vs => {
    console.log(`  re=${superPow(...vs)}, a=${vs[0]}, b=${vs[1].join('')}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
