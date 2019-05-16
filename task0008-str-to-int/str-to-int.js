/**
 * @param {string}    str     the string to extract
 * @return {number}           the integer that is extracted
 */
const myAtoi = function(str) {
  // remove leading whitespaces
  while (str.charAt(0) === ' ') {
    str = str.substr(1);
  }

  // then valid numeric string must starts with "+", "-" or digits
  if (!/^[\+\-\d]/.test(str)) {
    return 0;
  }

  // extract sign
  let sign = str.charAt(0) === '-' ? -1 : 1;
  if (str.charAt(0) === '+' || str.charAt(0) === '-') {
    str = str.substr(1);
  }

  // extract continuous digits
  const two31 = Math.pow(2, 31);
  let idx = 0;
  let num = 0;
  while (/^\d$/.test(str.charAt(idx))) {
    num = num * 10 + parseInt(str.charAt(idx ++));
    if (sign < 0 && num > two31) {
      return -two31;
    } else if (sign > 0 && num > two31 - 1) {
      return two31 - 1;
    }
  };
  return num * sign;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0008 - String to Integer (atoi):');
  [
    '42',
    '   -42',
    '4193 with words',
    'words and 987',
    '-91283472332',
  ].forEach( str => {
    console.log(`  str="${str}", int=${myAtoi(str)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
