/**
 * @param {number}      n     the number to count
 * @return {string}           the string to say
 */
const countAndSay = function(n) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0037 - Count and Say:');
  [
    1,
    5,
    10,
  ].forEach( v => {
    console.log(`  n=${v}; re="${countAndSay(v)}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
