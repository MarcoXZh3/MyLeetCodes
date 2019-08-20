/**
 * backtracking: try grab a 1-bit-changed number from pool as next
 * @param {number}        n   number of bits for the gray code
 * @return {number[]}         the gray code sequence
 */
const grayCode0 = function(n) {
  /**
   * @param {number[]}  res     all the results
   * @param {number[]}  pool    all the numbers remaining
   * @param {number}    n       number of bits for each gray code
   * @returns {boolean}         whether we have a valid gray code set or not
   */
  const backtracking = (res, pool, n) => {
    // no more numbers left in the pool -- a valid gray code set is extracted
    if (pool.length === 0) {
      return true;
    }
    // the last number in the result set
    const prev = res[res.length - 1];
    // try flip any 1 bit of the last number
    for (let i = 0; i < n; i++) {
      // don't move further if the new number is not in the pool
      const idx = pool.indexOf(prev ^ 1 << i);
      if (idx < 0) {
        continue ;
      }
      // try put the new number into the pool and keep backtracking
      res.push(pool.splice(idx, 1)[0]);
      if (backtracking(res, pool, n)) {
        return true;
      }
      // if no valid gray code set extracted, revert the trial and move next
      pool.splice(idx, 0, res.pop());
    }
    // tried all but failed
    return false;
  };

  const res = [0];
  const pool = [...Array(Math.pow(2, n) - 1).keys()].map( i=>i+1 );
  backtracking(res, pool, n);
  return res;
};


/**
 * recursive: gray code set of n consists of 2 parts:
 * 1) append 0 to gray code set of n - 1;
 * 2) append 1 to the reverse of the above gray code set of n - 1.
 * @param {number}        n   number of bits for the gray code
 * @return {number[]}         the gray code sequence
 */
const grayCode1 = function(n) {
  const res = [0];
  for (let i = 0; i < n; i++) {
    // for (let j = res.length - 1; j >= 0; j--) {
    //   res.push(res[j] | 1 << i);
    // }
    res = res.concat(res.slice().reverse().map( x=>x|1<<i ));
  }
  return res;
};


/**
 * G(i) = i ^ (i / 2);
 * @param {number}        n   number of bits for the gray code
 * @return {number[]}         the gray code sequence
 */
const grayCode = function(n) {
  const res = [];
  for (let i = 0; i < 1 << n; i++) {
    res.push(i ^ i >> 1);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0089 - Gray Code:');
  [
    2,
    0,
    3,
    4,
    10,
  ].forEach( v => {
    console.log(`  n=${v}, codes=[${grayCode(v).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
