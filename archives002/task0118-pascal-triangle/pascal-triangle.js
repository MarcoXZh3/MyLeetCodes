/**
 * @param {number}        numRows   rows of the triangle to generate
 * @return {number[][]}             the Pascal's triangle
 */
const generate = function(numRows) {
  const res = [];
  while (numRows-- > 0) {
    const prev = res[res.length - 1] || [];
    const cur = prev.slice();
    for (let i = 1; i < cur.length; i++) {
      cur[i] = prev[i - 1] + prev[i];
    }
    cur.push(1);
    res.push(cur);
  }
  return res;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0118 - Pascal\'s Triangle:');
  [
    5,
  ].forEach( v => {
    console.log(`  row=${v}`);
    for (let row of generate(v)) {
      console.log(`  [${row.join(', ')}]`);
    }
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
