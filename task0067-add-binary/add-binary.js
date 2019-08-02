/**
 * @param {string}    a     the 1st binary
 * @param {string}    b     the 2nd binary
 * @return {string}         the sum binary
 */
const addBinary = function(a, b) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0067 - Add Binary:');
  [
    ['11', '1'],
    ['1010', '1011'],
  ].forEach( vs => {
    console.log(`  ${vs[0]} + ${vs[1]} = ${addBinary(vs[0], vs[1])}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
