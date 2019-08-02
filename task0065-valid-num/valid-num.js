/**
 * @param {string}        s     the string for verification
 * @return {boolean}            true if is valid number; false if not
 */
const isNumber = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0065 - Valid Number:');
  [
    '0',
    ' 0.1 ',
    'abc',
    '1 a',
    '2e10',
    ' -90e3   ',
    ' 1e',
    'e3',
    ' 6e-1',
    ' 99e2.5 ',
    '53.5e93',
    ' --6 ',
    '-+3',
    '95a54e53',
    '.1',
    '3.',
  ].forEach( v => {
    console.log(`  str="${v}", isNumber=${isNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
