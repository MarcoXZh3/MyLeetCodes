/**
 * @param {number}        numRows   rows of the triangle to generate
 * @return {number[][]}             the Pascal's triangle
 */
const generate = function(numRows) {
  return [
    [1],
   [1,1],
  [1,2,1],
 [1,3,3,1],
[1,4,6,4,1]
]
;
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
