/**
 * @param {number}    num     the number to convert
 * @return {string}           the hex string
 */
const toHex = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0405 - Convert a Number to Hexadecimal:');
  [
    26,
    -1,
  ].forEach( v => {
    console.log(`  n=${v}, hex="${toHex(v)}"`)
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
