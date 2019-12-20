/**
 * Queue based BFS
 * @param {number}      x     capacity of the 1st jug
 * @param {number}      y     capacity of the 2nd jug
 * @param {number}      z     water to get
 * @return {boolean}          whether solvable or not
 */
const canMeasureWater0 = function(x, y, z) {
  if (z < 0 || z > x + y) {
    return false;
  }
  const set = new Set();
  const queue = [0];
  while (queue.length > 0) {
    const n = queue.shift();
    if (n + x <= x + y && !set.has(n + x)) {
      set.add(n + x);
      queue.push(n + x);
    }
    if (n + y <= x + y && !set.has(n + y)) {
      set.add(n + y);
      queue.push(n + y);
    }
    if (n - x >= 0 && !set.has(n - x)) {
      set.add(n - x);
      queue.push(n - x);
    }
    if (n - y >= 0 && !set.has(n - y)) {
      queue.push(n - y);
    }
    if (set.has(z)) {
      return true;
    }
  }
  return false;
};


/**
 * GCD
 * @param {number}      x     capacity of the 1st jug
 * @param {number}      y     capacity of the 2nd jug
 * @param {number}      z     water to get
 * @return {boolean}          whether solvable or not
 */
const canMeasureWater = function(x, y, z) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  return z == 0 || z - x <= y && z % gcd(x, y) === 0;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0365 - Water and Jug Problem:');
  [
    [3, 5, 4],
    [2, 6, 5],
  ].forEach( vs => {
    console.log(`  re=${canMeasureWater(...vs)}, x=${vs[0]}, y=${vs[1]}, z=${vs[2]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
