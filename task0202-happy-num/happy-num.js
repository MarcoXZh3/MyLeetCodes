/**
 * @param {number}      n     the number to check
 * @return {boolean}          whether a happy number or not
 */
const isHappy = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0202 - Happy Number:');
  [
    19,
  ].forEach( v => {
    console.log(`  num=${v}, happy=${isHappy(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
