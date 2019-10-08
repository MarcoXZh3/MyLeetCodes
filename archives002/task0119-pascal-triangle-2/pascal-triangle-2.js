/**
 * basic calculation
 * @param {number}      rowIndex    index of the row in Pascal's triangle
 * @return {number[]}               the list of numbers in the row
 */
const getRow0 = function(rowIndex) {
  let re = [];
  for (let i = 0; i <= rowIndex; i++) {
    const prev = re;
    re = re.slice();
    for (let i = 1; i < re.length; i++) {
      re[i] = prev[i - 1] + prev[i];
    }
    re.push(1);
  }
  return re;
};


/**
 * O(k) calculation
 * @param {number}      rowIndex    index of the row in Pascal's triangle
 * @return {number[]}               the list of numbers in the row
 */
const getRow = function(rowIndex) {
  const re = Array(rowIndex + 1).fill(0);
  re[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j >= 1; j--) {
      re[j] += re[j - 1];
    }
  }
  return re;
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0119 - Pascal\'s Triangle II:');
  [
    3,
  ].forEach( v => {
    console.log(`  row=${v}`);
    console.log(`  [${getRow(v).join(', ')}]`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
