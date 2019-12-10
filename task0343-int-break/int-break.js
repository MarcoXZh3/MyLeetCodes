/**
 * @param {number}    n   the integer to break
 * @return {number}       the maximized product
 */
const integerBreak = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0343 - Integer Break:');
  [
    2,
    10,
  ].forEach( v => {
    console.log(`  num=${v}, maxProd=${integerBreak(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
