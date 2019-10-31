/**
 * @param {number}    num   the number to check
 * @return {boolean}        whether an ugly number or not
 */
const isUgly = function(num) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0263 - Ugly Number:');
  [
    6,
    8,
    14,
  ].forEach( v => {
    console.log(`  num=${v}, ugly=${isUgly(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
