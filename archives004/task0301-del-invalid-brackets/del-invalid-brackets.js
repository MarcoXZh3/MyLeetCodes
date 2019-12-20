/**
 * backtracking
 * @param {string}      s   the raw expression containing parentheses
 * @return {string[]}       the valid expressions
 */
const removeInvalidParentheses0 = function(s) {
  const backtracking = (s, i, l, r, exp, cnt) => {
    if (i === s.length) {
      if (l === r && cnt <= min) {
        if (cnt < min) {
          valid = new Set();
          min = cnt;
        }
        valid.add(exp);
      }
    } else {
      const char = s.charAt(i);
      if (char !== '(' && char != ')') {
        exp += char;
        backtracking(s, i + 1, l, r, exp, cnt);
        exp = exp.substring(0, exp.length - 1);
      } else {
        backtracking(s, i + 1, l, r, exp, cnt + 1);
        exp += char;
        if (char === '(') {
          backtracking(s, i + 1, l + 1, r, exp, cnt);
        } else if (r < l) {
          backtracking(s, i + 1, l, r + 1, exp, cnt);
        }
        exp = exp.substring(0, exp.length - 1);
      }
   }
  };
  let valid = new Set();
  let min = Number.MAX_SAFE_INTEGER;
  backtracking(s, 0, 0, 0, '', 0);
  return [...valid];
};


/**
 * DFS
 * @param {string}      s   the raw expression containing parentheses
 * @return {string[]}       the valid expressions
 */
const removeInvalidParentheses = function(s) {
  const dfs = (s, i, res, exp, lCnt, rCnt, open) => {
    if (lCnt < 0 || rCnt < 0 || open < 0) {
      return ;
    }
    if (i === s.length) {
      if (lCnt === 0 && rCnt === 0 && open === 0) {
        res.add(exp);
      }
      return ;
    }
    const char = s.charAt(i);
    const len = exp.length;
    if (char === '(') {
      dfs(s, i + 1, res, exp, lCnt - 1, rCnt, open);
      dfs(s, i + 1, res, exp + char, lCnt, rCnt, open + 1);
    } else if (char === ')') {
      dfs(s, i + 1, res, exp, lCnt, rCnt - 1, open);
      dfs(s, i + 1, res, exp + char, lCnt, rCnt, open - 1);
    } else {
      dfs(s, i + 1, res, exp + char, lCnt, rCnt, open);
    }
    exp = exp.substr(0, len);
  };

  let lCnt = 0;
  let rCnt = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(') {
      lCnt ++;
    } else if (char === ')') {
      if (lCnt !== 0) {
        lCnt --;
      } else {
        rCnt ++;
      }
    }
  }
  const res = new Set();
  dfs(s, 0, res, '', lCnt, rCnt, 0);
  return [...res];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0301 - Remove Invalid Parentheses:');
  [
    '()())()',
    '(a)())()',
    ')(',
  ].forEach( v => {
    console.log(`  raw="${v}", valid=${JSON.stringify(removeInvalidParentheses(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
