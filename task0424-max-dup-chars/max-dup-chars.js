/**
 * @param {string}    s     the original string
 * @param {number}    k     the max operations allowed
 * @return {number}         length of target sub-string
 */
const characterReplacement = function(s, k) {
  const cnt = Array(26).fill(0);
  let start = 0;
  let maxCnt = 0;
  let re = 0;
  for (let end = 0; end < s.length; end++) {
    maxCnt = Math.max(maxCnt, ++cnt[s.charCodeAt(end) - 'A'.charCodeAt(0)]);
    while (end - start - maxCnt + 1 > k) {
      cnt[s.charCodeAt(start) - 'A'.charCodeAt(0)] --;
      start ++;
    }
    re = Math.max(re, end - start + 1);
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0424 - Longest Repeating Character Replacement:');
  [
    ['ABAB', 2],
    ['AABABBA', 1],
  ].forEach( vs => {
    console.log(`  target=${characterReplacement(...vs)}, str="${vs[0]}", k=${vs[1]}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
