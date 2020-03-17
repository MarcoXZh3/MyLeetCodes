/**
 * @param {number[]}    nums    the number array
 * @return {number}             max XOR of two numbers in the array
 */
const findMaximumXOR = function(nums) {
  let max = 0;
  let mask = 0;
  for (let i = 31; i >= 0; i--) {
    mask = mask | (1 << i);
    const set = new Set();
    for (let num of nums) {
      set.add(num & mask);
    }
    const cur = max | (1 << i);
    for (let val of set) {
      if (set.has(cur ^ val)) {
        max = cur;
        break ;
      }
    }
  }
  return max;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0421 - Maximum XOR of Two Numbers in an Array:');
  [
    [3, 10, 5, 25, 2, 8],
  ].forEach( vs => {
    console.log(`  max=${findMaximumXOR(vs)}, nums=${JSON.stringify(vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
