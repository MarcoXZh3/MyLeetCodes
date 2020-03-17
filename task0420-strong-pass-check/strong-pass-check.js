/**
 * @param {string}    s     the password to check
 * @return {number}         how many changes needed to become complicated
 */
const strongPasswordChecker = function(s) {
  let res = 0;
  let lower = 1;
  let upper = 1;
  let num = 1;
  let arr = Array(s.length).fill(0);
  for (let i = 0; i < s.length;) {
    const char = s.charAt(i);
    if (/[a-z]/.test(char)) {
      lower = 0;
    } else if (/[A-Z]/.test(char)) {
      upper = 0;
    } else if (/[0-9]/.test(char)) {
      num = 0;
    }
    let j = i;
    while (i < s.length && char === s.charAt(i)) {
      i ++;
    }
    arr[j] = i - j;
  }
  let total = lower + upper + num;
  if (s.length < 6) {
    res += total + Math.max(0, 6 - s.length - total);
  } else {
    let over = Math.max(s.length - 20, 0);
    let left = 0;
    res += over;
    for (let k = 1; k < 3; k++) {
      for (let i = 0; i < s.length && over > 0; i++) {
        if (arr[i] < 3 || arr[i] % 3 !== k - 1) {
          continue ;
        }
        arr[i] -= Math.min(over, k);
        over -= k;
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (arr[i] >= 3 && over > 0) {
        let need = arr[i] - 2;
        arr[i] -= over;
        over -= need;
      }
      if (arr[i] >= 3) {
        left += Math.floor(arr[i] / 3);
      }
    }
    res += Math.max(total, left);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0420 - Strong Password Checker:');
  [
  ].forEach( v => {
    console.log(`  change=${strongPasswordChecker(v)}, pass="${v}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
