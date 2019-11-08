/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0299 - Bulls and Cows:');
  [
    ['1807', '7810'],
    ['1123', '0111'],
  ].forEach( vs => {
    console.log(`  hint="${getHint(vs[0], vs[1])}", secret="${vs[0]}", guess="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
