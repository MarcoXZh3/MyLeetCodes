/**
 * @param {number}        k     how many numbers required
 * @param {number}        n     the target sum
 * @return {number[][]}         all solutions
 */
const combinationSum3 = function(k, n) {
  const MIN = 1;
  const MAX = 9;

  const backtracking = (cur, sum, res) => {
    if (cur.length === k) {
      if (sum === n) {
        res.push(cur.slice());
      }
    } else {
      let num = cur.length > 0 ? cur[cur.length - 1] + 1 : MIN;
      while (num <= MAX) {
        cur.push(num);
        backtracking(cur, sum + num, res);
        cur.pop();
        num ++;
      }
    }
  };

  const res = [];
  backtracking([], 0, res);
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0216 - Combination Sum III:');
  [
    [3, 7],
    [3, 9],
  ].forEach( vs => {
    const ans = combinationSum3(vs[0], vs[1]);
    console.log(`  target=${vs[1]}; n=${vs[0]}`);
    console.log(`  ans=[${ans.map( an=>`[${an.join(',')}]` ).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
