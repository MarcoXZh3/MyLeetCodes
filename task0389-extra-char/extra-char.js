/**
 * @param {string}        s     the 1st string
 * @param {string}        t     the 2nd string
 * @return {character}          the char that is added to t
 */
const findTheDifference = function(s, t) {

};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0389 - Find the Difference:');
  [
    ['abcd', 'abcde'],
  ].forEach( vs => {
    console.log(`  char='${findTheDifference(...vs)}', s="${vs[0]}", t="${vs[1]}"`);
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
