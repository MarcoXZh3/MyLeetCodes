/**
 * @param {number}      n     the max number
 * @return {number}           the last number remaining
 */
const lastRemaining0 = function(n) {
  let left = true;
  let remaining = n;
  let step = 1;
  let head = 1;
  while (remaining > 1) {
    if (left || remaining % 2 === 1) {
      head += step;
    }
    remaining = Math.floor(remaining / 2);
    step *= 2;
    left = !left;
  }
  return head;
};


/**
 * @param {number}      n     the max number
 * @return {number}           the last number remaining
 */
const lastRemaining = function(n) {
  const recursion = (n) => n === 1 ? 1 : 2 * ((n >> 1) + 1 - recursion(n>>1));
  return recursion(n);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0390 - Elimination Game:');
  [
    9,
    100000000,
  ].forEach( v => {
    console.log(`  n=${v}, last=${lastRemaining(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
