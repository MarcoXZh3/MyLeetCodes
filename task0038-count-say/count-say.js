/**
 * recursion
 * @param {number}      n     the number to count
 * @return {string}           the string to say
 */
const countAndSay1 = function(n) {
  if (n === 1) {
    return '1';
  }

  // count previous
  const prev = countAndSay(n - 1);
  // say current
  let re = '';
  let cnt = 1;
  for (let i = 1; i < prev.length; i++) {
    if (prev.charAt(i - 1) === prev.charAt(i)) {
      cnt ++;
      continue ;
    }
    re += `${cnt}${prev.charAt(i - 1)}`;
    cnt = 1;
  }
  return re + `${cnt}${prev.charAt(prev.length - 1)}`;
};


/**
 * iteration
 * @param {number}      n     the number to count
 * @return {string}           the string to say
 */
const countAndSay = function(n) {
  let prev = '1';
  while (--n > 0) {
    let cur = '';
    let cnt = 1;
    for (let i = 1; i < prev.length; i++) {
      if (prev.charAt(i - 1) === prev.charAt(i)) {
        cnt ++;
        continue ;
      }
      cur += `${cnt}${prev.charAt(i - 1)}`;
      cnt = 1;
    }
    prev = cur + `${cnt}${prev.charAt(prev.length - 1)}`;
  }
  return prev;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0037 - Count and Say:');
  [
    1, 2, 3, 4, 5,
  ].forEach( v => {
    console.log(`  n=${v}; re="${countAndSay(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
