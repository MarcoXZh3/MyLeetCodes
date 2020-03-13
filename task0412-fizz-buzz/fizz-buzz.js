/**
 * @param {number}        n     the number of strings to return
 * @return {string[]}           the string list with fizz/buzz
 */
const fizzBuzz = function(n) {
  return [...Array(n).keys()].map( (_,i) => {
    i ++;
    if (i % 15 === 0) {
      return `FizzBuzz`;
    } else if (i % 3 === 0) {
      return `Fizz`;
    } else if (i % 5 === 0) {
      return `Buzz`;
    } else {
      return `${i}`;
    }
  });
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
