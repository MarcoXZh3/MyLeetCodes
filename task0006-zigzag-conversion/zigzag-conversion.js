/**
 * @param {string}    s         string for conversion
 * @param {number}    numRows   number of rows
 * @return {string}             the zig-zag string
 */
const convert = function(s, numRows) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0005 - ZigZag Conversion:');
  [
    ['PAYPALISHIRING', 3],
    ['PAYPALISHIRING', 4],
  ].forEach( (vs) => {
    console.log(`  str="${vs[0]}", row=${vs[1]}; conv="${convert(vs[0], vs[1])}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
