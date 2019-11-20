/**
 * @param {string}      num     the digit array
 * @return {boolean}            whether it's additive or not
 */
const isAdditiveNumber = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0306 - Additive Number:');
  [
    '112358',
    '199100199',
    '1023',
  ].forEach( v => {
    console.log(`  num="${v}", additive=${isAdditiveNumber(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
