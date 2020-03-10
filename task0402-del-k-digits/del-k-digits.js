/**
 * @param {string}    num       the original number
 * @param {number}    k         number of digits to be deleted
 * @return {string}             the minimum number after removing
 */
const removeKdigits = function(num, k) {
  num = num.split('').map( v => parseInt(v, 10) );
  const len = num.length - k;
  const stack = Array(num.length).fill(0);
  let idx = 0;
  for (let i = 0; i < num.length; i++) {
    while (idx > 0 && stack[idx - 1] > num[i] && k > 0) {
      idx --;
      k --;
    }
    stack[idx ++] = num[i];
  }
  idx = 0;
  while (idx < len && stack[idx] === 0) {
    idx ++;
  }
  return idx === len ? '0' : stack.slice(idx, len).join('');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0402 - Remove K Digits:');
  [
    ['1432219', 3],
    ['10200', 1],
    ['10', 2],
  ].forEach( vs => {
    console.log(`  num=${vs[0]}, k=${vs[1]} target=${removeKdigits(...vs)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
