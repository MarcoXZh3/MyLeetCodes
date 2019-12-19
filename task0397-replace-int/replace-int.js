/**
 * @param {number}      n     the number to change
 * @return {number}           minimum time to become 1
 */
const integerReplacement = function(n) {
  let re = 0;
  while (n > 1) {
    if (( n & 1) === 0) {
      n = Math.floor(n / 2);
    } else if (n === 3 || (Math.floor(n / 2) & 1) === 0) {
      n --;
    } else {
      n ++;
    }
    re ++;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0397 - Integer Replacement:');
  [
    8,
    7,
    65535,
  ].forEach( v => {
    console.log(`  num=${v}, rep=${integerReplacement(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
