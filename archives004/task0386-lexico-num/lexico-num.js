/**
 * @param {number}      n       the max number
 * @return {number[]}           the lexicographically sorted numbers
 */
const lexicalOrder0 = function(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(`${i + 1}`);
  }
  return res.sort( (a,b)=>a>b?1:-1 ).map( x=>parseInt(x, 10) );
};


/**
 * @param {number}      n       the max number
 * @return {number[]}           the lexicographically sorted numbers
 */
const lexicalOrder1 = function(n) {
  const dfs = (cur) => {
    if (cur > n) {
      return ;
    }
    res.push(cur);
    for (let i = 0; i < 10; i++) {
      if (10 * cur + i > n) {
        return ;
      }
      dfs(10 * cur + i);
    }
  };
  const res = [];
  for (let i = 1; i < 10; i++) {
    dfs(i);
  }
  return res;
};


/**
 * @param {number}      n       the max number
 * @return {number[]}           the lexicographically sorted numbers
 */
const lexicalOrder = function(n) {
  const res = [];
  let cur = 1;
  for (let i = 0; i < n; i++) {
    res[i] = cur;
    if (cur * 10 <= n) {
      cur *= 10;
    } else {
      if (cur >= n) {
        cur = Math.floor(cur / 10);
      }
      cur ++;
      while (cur % 10 === 0) {
        cur = Math.floor(cur / 10);
      }
    }
  }
  return res;
};
/*
        vector<int> res(n);
        int cur = 1;
        for (int i = 0; i < n; i++) {
            res[i] = cur;
            if (cur * 10 <= n) {
                cur *= 10;
            } else {
                if (cur >= n) 
                    cur /= 10;
                cur += 1;
                while (cur % 10 == 0)
                    cur /= 10;
            }
        }
        return res;
*/

/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0386 - Lexicographical Numbers:');
  [
    13,
  ].forEach( v => {
    console.log(`  n=${v}, val=${JSON.stringify(lexicalOrder(v))}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
