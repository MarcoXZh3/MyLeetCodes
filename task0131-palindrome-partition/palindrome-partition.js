/**
 * check whether the string is palindrome or not
 * @param {string}    s     string to check
 * @returns {boolean}       whether is palindrome or not
 */
const isPalindrome = function(s) {
  for (let i = 0; i < s.length - 1 - i; i++) {
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
      return false;
    }
  }
  return true;
};


/**
 * @param {string}        s     the string to partition
 * @return {string[][]}         the partition results
 */
const partition = function(s) {
  const backtrack = (s, cur, res) => {
    if (s.length <= 1) {
      res.push(cur.slice());
      if (s.length === 1) {
        res[res.length - 1].push(s);
      }
      return ;
    }
    for (let i = 1; i <= s.length; i++) {
      const s1 = s.substring(0, i);
      if (!isPalindrome(s1)) {
        continue ;
      }
      cur.push(s1);
      backtrack(s.substring(i), cur, res);
      cur.pop();
    }
  };
  const res = [];
  backtrack(s, [], res);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0131 - Palindrome Partitioning:');
  [
    'aab',
    'bb',
  ].forEach( v => {
    console.log(`  str="${v}"`);
    const strs = partition(v);
    for (let i = 0; i < strs.length; i++) {
      console.log(`  ${i+1}/${strs.length}: [${strs[i].map( s=>`"${s}"`).join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
