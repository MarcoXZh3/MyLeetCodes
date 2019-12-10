/**
 * basic - convert to binary then count 1s
 * @param {number}      num     the upper boundary number
 * @return {number[]}           how many 1s in the numbers
 */
const countBits0 = function(num) {
  const res = Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    res[i] = i.toString(2).split('').filter(x=>x==='1').length;
  }
  return res;
};


/**
 * basic - reduce each number and find the number of 1s
 * @param {number}      num     the upper boundary number
 * @return {number[]}           how many 1s in the numbers
 */
const countBits1 = function(num) {
  const res = Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    let n = i;
    while (n > 0) {
      res[i] += n % 2;
      n = Math.floor(n / 2);
    }
  }
  return res;
};


/**
 * @param {number}      num     the upper boundary number
 * @return {number[]}           how many 1s in the numbers
 */
const countBits2 = function(num) {
  const res = Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
};


/**
 * @param {number}      num     the upper boundary number
 * @return {number[]}           how many 1s in the numbers
 */
const countBits = function(num) {
  const res = Array(num + 1).fill(0);
  let offset = 1;
  for (let i = 1; i <= num; i++) {
    if (offset * 2 === i) {
      offset *= 2;
    }
    res[i] = res[i - offset] + 1;
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0338 - Counting Bits:');
  [
    2,
    5,
  ].forEach( v => {
    console.log(`  num=${v}, 1s=${JSON.stringify(countBits(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
