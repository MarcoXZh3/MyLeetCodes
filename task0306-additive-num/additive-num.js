/**
 * recursion
 * @param {string}      num     the digit array
 * @return {boolean}            whether it's additive or not
 */
const isAdditiveNumber0 = function(num) {
  const dfs = (nums, str) => {
    const sum = nums[nums.length - 2] + nums[nums.length - 1];
    const sub = `${sum}`;
    if (!str.startsWith(sub)) {
      return false;
    }
    nums.push(sum);
    return str === sub || dfs(nums, str.substring(sub.length));
  };

  for (let i = 1; i < num.length; i++) {
    let sub1 = num.substring(0, i);
    if (sub1.length > 1 && sub1.startsWith('0')) {
      continue ;
    }
    sub1 = parseInt(sub1, 10);
    for (let j = i + 1; j < num.length; j++) {
      let sub2 = num.substring(i, j);
      if (sub2.length > 1 && sub2.startsWith('0')) {
        continue ;
      }
      sub2 = parseInt(sub2, 10);
      if (dfs([sub1, sub2], num.substring(j))) {
        return true;
      }
    }
  }
  return false;
};


/**
 * iteration
 * @param {string}      num     the digit array
 * @return {boolean}            whether it's additive or not
 */
const isAdditiveNumber = function(num) {
  const n = num.length;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let num1 = parseInt(num.substring(0, i), 10);
      let num2 = parseInt(num.substring(i, j), 10);
      if (num1 !== 0 && num.charAt(0) === '0' ||
          num2 !== 0 && num.charAt(i) === '0') {
        continue ;
      }
      let k = j;
      while (k < n) {
        const sum = num1 + num2;
        if (!num.substring(k).startsWith(`${sum}`)) {
          break ;
        }
        k += `${sum}`.length;
        num1 = num2;
        num2 = sum;
      }
      if (k === n) {
        return true;
      }
    }
  }
  return false;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0306 - Additive Number:');
  [
    '112358',
    '199100199',
    '1023',
    '12122436',
    '111122335588143',
  ].forEach( v => {
    console.log(`  num="${v}", additive=${isAdditiveNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
