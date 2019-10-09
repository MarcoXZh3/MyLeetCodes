/**
 * basic solution using hash set to detect infinite loop
 * @param {number}      n     the number to check
 * @return {boolean}          whether a happy number or not
 */
const isHappy0 = function(n) {
  const res = new Set();
  while (n !== 1) {
    let re = 0;
    while (n > 0) {
      re += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (res.has(re)) {
      return false;
    }
    res.add(re);
    n = re;
  }
  return true;
};


/**
 * two pointers with O(1) space
 * @param {number}      n     the number to check
 * @return {boolean}          whether a happy number or not
 */
const isHappy = function(n) {
  const calc = (x) => {
    let re = 0;
    while (x > 0) {
      re += (x % 10) * (x % 10);
      x = Math.floor(x / 10);
    }
    return re;
  };

  let r1 = n;
  let r2 = n;
  while (true) {
    r1 = calc(r1);
    r2 = calc(calc(r2));
    if (r1 === 1 || r2 === 1) {
      return true;
    }
    if (r1 === r2) {
      return false;
    }
  }
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0202 - Happy Number:');
  [
    19,
    2,
  ].forEach( v => {
    console.log(`  num=${v}, happy=${isHappy(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
