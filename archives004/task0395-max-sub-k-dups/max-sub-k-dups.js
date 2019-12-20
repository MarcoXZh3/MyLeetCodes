/**
 * @param {string}    s     the string
 * @param {number}    k     number of repetition
 * @return {number}         the max sub string
 */
const longestSubstring = function(s, k) {
  const recursion = (s) => {
    if (s.length < k) {
      return 0;
    }
    const map = {};
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      map[char] = 1 + (map[char] || 0);
    }
    let idx = 0;
    while (idx < s.length && map[s.charAt(idx)] >= k) {
      idx ++;
    }
    return idx < s.length ? Math.max(recursion(s.substr(0, idx)), recursion(s.substr(idx + 1)))
                          : s.length;
  };
  return k === 0 ? s.length : recursion(s);
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0395 - Longest Substring with At Least K Repeating Characters:');
  [
    ['aaabb', 3],
    ['ababbc', 2],
    ['bbaaacbd', 3],
  ].forEach( vs => {
    console.log(`  max=${longestSubstring(...vs)}, k=${vs[1]}, str="${vs[0]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
