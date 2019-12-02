/**
 * @param {string}    s     the original string with duplicated letters
 * @return {string}         the string with duplicated letters removed
 */
const removeDuplicateLetters = function(s) {
  const recursion = (str) => {
    const cnt = Array(26).fill(0);
    let pos = 0;
    for (let i = 0; i < str.length; i++) {
      cnt[str.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
    }
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) < str.charAt(pos)) {
        pos = i;
      }
      if (-- cnt[str.charCodeAt(i) - 'a'.charCodeAt(0)] === 0) {
        break ;
      }
    }
    const sub = str.substring(pos + 1).split(str.charAt(pos)).join('');
    return str.length === 0 ? '' : str.charAt(pos) + recursion(sub);
  };
  return recursion(s);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0316 - Remove Duplicate Letters:');
  [
    'bcabc',
    'cbacdcbc',
  ].forEach( v => {
    console.log(`  str="${removeDuplicateLetters(v)}"; raw="${v}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
