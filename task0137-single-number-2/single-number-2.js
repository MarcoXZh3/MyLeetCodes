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
    if (cnts[k] === 1) {
      return parseInt(k, 10);
    }
  }
  return null;
};


/**
 * bitwise calculation
 * @param {number[]}  nums    the number array
 * @return {number}           the single number
 */
const singleNumber = function(nums) {
  let re = 0;
  let tmp = 0;
  for (let n of nums) {
    re = (re ^ n) & ~tmp;
    tmp = (tmp ^ n) & ~re;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0137 - Single Number II:');
  [
    [2, 2, 3, 2],
    [0, 1, 0, 1, 0, 1, 99],
  ].forEach( vs => {
    console.log(`  single=${singleNumber(vs)}, nums=[${vs.join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
