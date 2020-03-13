/**
 * @param {number}        n     the number of strings to return
 * @return {string[]}           the string list with fizz/buzz
 */
const fizzBuzz = function(n) {
  return [];
};


/**
 * main function
 * @param {function}  callback    the callback function
 */
const main = (callback) => {
  console.log('Task 0412 - Fizz Buzz:');
  [
    15,
  ].forEach( v => {
    console.log(`  n=${v}`);
    fizzBuzz(v).forEach( (e, i, a) => {
      console.log(`  ${i + 1}/${a.length}: "${e}"`);
    });
  });
  if (callback) {
    callback();
  }
};


module.exports = main;
