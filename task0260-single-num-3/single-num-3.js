/**
 * @param {number[]}    nums    the number array
 * @return {number[]}           the numbers only show once
 */
const singleNumber0 = function(nums) {
  const cnts = {};
  for (let n of nums) {
    cnts[`${n}`] = (cnts[`${n}`] || 0) + 1;
  }
  const res = [];
  for (let k in cnts) {
    if (cnts[k] === 1) {
      res.push(parseInt(k, 10));
    }
  }
  return res;
};


/**
 * @param {number[]}    nums    the number array
 * @return {number[]}           the numbers only show once
 */
const singleNumber = function(nums) {
  let diff = 0;
  for (let num of nums) {
    diff ^= num;
  }
  diff &= -diff;
  const res = [];
  for (let num of nums) {
    res[num & diff ? 0 : 1] ^= num;
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0260 - Single Number III:');
  [
    [1, 2, 1, 3, 2, 5],
  ].forEach( vs => {
    console.log(`  nums=[${vs.join(', ')}], single=[${singleNumber(vs).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
