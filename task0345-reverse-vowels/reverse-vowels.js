/**
 * @param {string}      s     the string to reverse
 * @return {string}           the reversed string
 */
const reverseVowels = function(s) {
  const VOWELS = 'aeiouAEIOU';
  const res = s.split('');
  for (let i = 0, j = res.length - 1; i < j; ) {
    if (!VOWELS.includes(res[i])) {
      i ++;
    } else if (!VOWELS.includes(res[j])) {
      j --;
    } else {
      let tmp = res[i];
      res[i] = res[j];
      res[j] = tmp;
      i ++;
      j --;
    }
  }
  return res.join('');
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0345 - Reverse Vowels of a String:');
  [
    'hello',
    'leetcode',
    '',
  ].forEach( v => {
    console.log(`  str="${v}", rev="${reverseVowels(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
