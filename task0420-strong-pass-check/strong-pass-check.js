/**
 * @param {string}    s     the password to check
 * @return {number}         how many changes needed to become complicated
 */
const strongPasswordChecker = function(s) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0420 - Strong Password Checker:');
  [
  ].forEach( v => {
    console.log(`  change=${strongPasswordChecker(v)}, pass="${v}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
