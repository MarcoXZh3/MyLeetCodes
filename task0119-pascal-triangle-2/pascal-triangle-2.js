/**
 * @param {number}      rowIndex    index of the row in Pascal's triangle
 * @return {number[]}               the list of numbers in the row
 */
const getRow = function(rowIndex) {
  return [];
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
