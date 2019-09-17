/**
 * hash map
 * @param {number[]}  nums    the number array
 * @return {number}           the single number
 */
const singleNumber0 = function(nums) {
  const cnts = {};
  for (let n of nums) {
    cnts[`${n}`] = (cnts[`${n}`] || 0) + 1;
  }
  for (let k in cnts) {
    if (cnt[k] === 1) {
      return parseInt(k, 10);
    }
  }
  return null;
};


/**
 * XOR: a XOR a = 0; a XOR 0 = a
 * @param {number[]}  nums    the number array
 * @return {number}           the single number
 */
const singleNumber = function(nums) {
  let re = 0;
  for (let n of nums) {
    re = re ^= n;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0136 - Single Number:');
  [
    [2, 2, 1],
    [4, 1, 2, 1, 2],
  ].forEach( vs => {
    console.log(`  single=${singleNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
