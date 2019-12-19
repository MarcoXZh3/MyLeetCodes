/**
 * @param {string}    s     the encoded string
 * @return {string}         the decoded string
 */
const decodeString0 = function(s) {
  let re = '';
  const stack1 = [];
  const stack2 = [];
  let idx = 0;
  while (idx < s.length) {
    const char = s.charAt(idx);
    if (/[0-9]/.test(char)) {
      let cnt = 0;
      while (/[0-9]/.test(s.charAt(idx))) {
        cnt = cnt * 10 + parseInt(s.charAt(idx ++), 10);
      }
      stack1.push(cnt);
      idx --;
    } else if (char === '[') {
      stack2.push(re);
      re = '';
    } else if (char === ']') {
      let cur = stack2.pop();
      let cnt = stack1.pop();
      while (cnt -- > 0) {
        cur += re;
      }
      re = cur;
    } else {
      re += char;
    }
    idx ++;
  }
  return re;
};


/**
 * @param {string}    s     the encoded string
 * @return {string}         the decoded string
 */
const decodeString = function(s) {
  const recursion = () => {
    let re = '';
    while (idx < s.length && s.charAt(idx) !== ']') {
      if (!/[0-9]/.test(s.charAt(idx))) {
        re += s.charAt(idx ++);
      } else {
        let cnt = 0;
        while (idx < s.length && /[0-9]/.test(s.charAt(idx))) {
          cnt = cnt * 10 + parseInt(s.charAt(idx ++), 10);
        }
        idx ++;
        const cur = recursion();
        idx ++;
        while (cnt -- > 0) {
          re += cur;
        }
      }
    }
    return re;
  };
  let idx = 0;
  return recursion();
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0394 - Decode String:');
  [
    '3[a]2[bc]',
    '3[a2[c]]',
    '2[abc]3[cd]ef',
  ].forEach( v => {
    console.log(`  code="${v}", str="${decodeString(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
