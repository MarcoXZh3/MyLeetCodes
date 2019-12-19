/**
 * @param {number}      n     the number to change
 * @return {number}           minimum time to become 1
 */
const integerReplacement = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0397 - Integer Replacement:');
  [
    8,
    7,
  ].forEach( v => {
    console.log(`  num=${v}, rep=${integerReplacement(v)}`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
