/**
 * @param {string}    num1      the first number
 * @param {string}    num2      the second number
 * @return {string}             the result
 */
const add = function(num1, num2) {
  let re = '';
  let carry = 0;
  while (num1.length > 0 && num2.length > 0) {
    const sum = carry + (num1.charAt(num1.length - 1) - '0') +
                        (num2.charAt(num2.length - 1) - '0');
    num1 = num1.substring(0, num1.length - 1);
    num2 = num2.substring(0, num2.length - 1);
    carry = Math.floor(sum / 10);
    re = `${sum % 10}${re}`;
  }
  let remain = num1.length > 0 ? num1 : num2;
  while (remain.length > 0) {
    const sum = (remain.charAt(remain.length - 1) - '0') + carry;
    remain = remain.substring(0, remain.length - 1);
    carry = Math.floor(sum / 10);
    re = `${sum % 10}${re}`;
  }
  return `${carry ? carry : ''}${re}`;
};


/**
 * @param {string}    num1      the first number
 * @param {string}    num2      the second number
 * @return {string}             the result
 */
const multiply0 = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let re = '0';
  for (let i = num1.length - 1; i >= 0; i--) {
    let d1 = num1.charAt(i) - '0';
    if (d1 === 0) {
      continue ;
    }
    let re0 = '0';
    for (let j = num2.length - 1; j >= 0; j--) {
      let tmp = `${(num2.charAt(j) - '0') * d1}`;
      for (let k = 0; k < num2.length - 1 - j; k++) {
        tmp += '0';
      }
      re0 = add(re0, tmp);
      // console.log('i', i, d1, 'j', j, num2, re0, tmp);
    }
    for (let k = 0; k < num1.length - 1 - i; k++) {
      re0 += '0';
    }
    // console.log('i', re, re0);
    re = add(re, re0);
  }
  return `${re}`;
};


/**
 * save the result digits of num1[i] * num2[j] to res[i+j] & pos[i+j+1]
 * @param {string}    num1      the first number
 * @param {string}    num2      the second number
 * @return {string}             the result
 */
const multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  // calculate multiply result digits by digits
  let res = Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    if (num1[i] === '0') {
      continue ;
    }
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
      const idx = i + j + 1;
      const sum = mul + res[idx];
      res[idx - 1] += Math.floor(sum / 10);
      res[idx] = sum % 10;
    }
  }

  // concat results
  let re = '';
  for (let i = 0; i < res.length; i++) {
    if (!re && !res[i]) {
      continue ;
    }
    re += `${res[i]}`;
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0043 - Multiply Strings:');
  [
    ['2', '3'],
    ['9', '99'],
    ['123', '246'],
    ['7096', '7096'],
    ['123456789', '987654321'],
  ].forEach( vs => {
    console.log(`  "${vs[0]}" * "${vs[1]}" = "${multiply(vs[0], vs[1])}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
